import CourseCard from "@/components/Home/CourseCard";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Course } from "./Home";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { usePagination } from "@/CustomHook/usePagination";
import PaginationPage from "@/components/PaginationPage";

type Catagories = {
  name: string;
  _id: string;
};
const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Catagories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>();

  const { currentPage, setCurrentPage, totalPages, setTotalPages } =
    usePagination();

  const location = useLocation();

  const { results } = location.state || {};
  const handleCheckboxChange = (categoryId: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories?.includes(categoryId)) {
        return prevSelectedCategories.filter((id) => id !== categoryId);
      } else {
        return [
          ...(prevSelectedCategories ? prevSelectedCategories : []),
          categoryId,
        ];
      }
    });
  };

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(
        `/auth/search/?categories=${selectedCategories?.join(",") || ""}`
      );
      setCourses(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    if (results) {
      setCourses(results);
    }
  }, [results]);

  const loadData = async () => {
    if (selectedCategories) {
      await fetchCourses();
    } else {
      try {
        const { data } = await axios.get(`/auth/courses?page=${currentPage}`);
        setTotalPages(data.pageCount);
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
  }, [selectedCategories, currentPage]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r shadow-md md:block">
        <div className="flex-1 px-4 py-16">
          <nav className="grid items-start border rounded-lg shadow-lg px-2 text-sm font-medium lg:px-4">
            <div className="border-b mb-4 pb-2">
              <h2 className="text-lg p-2 font-semibold">Categories</h2>
            </div>
            {categories &&
              categories.map((catagory, index) => (
                <div
                  key={index}
                  className=" capitalize flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 text-md  transition-all hover:text-primary"
                >
                  <Checkbox
                    onClick={() => handleCheckboxChange(catagory._id)}
                    className="h-4 w-4"
                  />{" "}
                  {catagory.name}
                </div>
              ))}
          </nav>
        </div>
      </div>

      <main className="p-4 lg:p-6">
        <div className="flex flex-row gap-4 flex-wrap">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <PaginationPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </main>
    </div>
  );
};

export default Courses;
