import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

interface Course {
  _id: string;
  title: string;
}

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<Course[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (searchText.trim() !== "") {
        fetchSearch();
      }
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [searchText]);

  const fetchSearch = async () => {
    try {
      const response = await axios.get<Course[]>(`/auth/search/?searchText=${searchText||""}`);
      setResults(response.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error searching:", error);
      setShowSuggestions(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setShowSuggestions(false);
  };
   const handleSearch = ()=>{
    if (searchText.trim() !== ""){
      navigate('/courses', { state: { results } });
    setSearchText("")
    setShowSuggestions(false);
    }
   }
  const handleResultClick = (courseId: string) => { 

    navigate(`/course-details/${courseId}`)
    setShowSuggestions(false);
    
  };

  return (
    <div className="relative">
      <div className="items-center border-2 focus-within:ring focus-within:ring-blue-800 rounded-lg hidden sm:flex flex-wrap">
        <input
          className="px-4 py-2 border-none focus:outline-none w-64"
          type="text"
          placeholder="Search Courses"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit" className="p-2 focus:outline-none" onClick={handleSearch}>
          <CiSearch className="h-6 w-6" />
        </button>
      </div>
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 bg-white border z-10">
          {results.length > 0 && (
            <div>
              <h2 className="px-4 py-2 border-b border-gray-300">Search Results:</h2>
              <ul>
                {results.map((result) => (
                  <li
                    key={result._id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleResultClick(result._id)}
                  >
                    {result.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
