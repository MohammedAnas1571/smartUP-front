

import CourseCard from "@/components/Home/CourseCard";
import { Home } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Course } from "./Home";
import axios from "axios";
import { useLocation } from "react-router-dom";
type  Catagories = {
  name: string;
  _id:string
}
const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Catagories[]>([]);
  const location = useLocation();

  const fetchCourses = async (searchText: string) => {
    try {
      const { data } = await axios.get(`/auth/search/?searchText=${searchText}`);
      setCourses(data);
      
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  const loadData = async () => {
    const queryParams = new URLSearchParams(location.search);
    const searchText = queryParams.get("search");
    if (searchText) {
      await fetchCourses(searchText);
    } else {
      try {
        const { data } = await axios.get("/auth/courses");
        setCourses(data.courses);
        setCategories(data.categories);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast(err.response.data.message || "Sorry, something went wrong!");
        }
      }
    }
  };
  useEffect(() => {
   

    loadData();
  }, [location.search]);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
   
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex-1 py-16">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
           
            {categories && categories.map((catagory, index) => (
             
                <div key={index} className=" capitalize flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 text-lg  transition-all hover:text-primary">
                  <input
                  type="radio"
                  
                  value= {catagory._id}
                  className="form-radio h-5 w-5"
                 /> {catagory.name}
                </div>
            ))}
          </nav>
        </div>
      </div>
      
 
      <div className="h-screen scrollbar overflow-y-scroll">
        <main className="p-4 lg:p-6">
          <div className="flex flex-row gap-4 flex-wrap">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
              
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;
