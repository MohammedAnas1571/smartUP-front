import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FcPlanner } from "react-icons/fc";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  
} from "@/components/ui/pagination";

type MyCourse = {
  _id: string;
  image: string;
  updatedAt: string;
  title: string;
  price: string;
  isPublish: boolean;
};

const MyCourses = () => {
  const [courses, setCourses] = useState<MyCourse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigator = useNavigate();

  const fetchItems = async () => {
    try {
      const response = await axios.get(`/auth/tutor/myCourses?page=${currentPage}`);
      const formattedCourses = response.data.courses.map(
        (course: MyCourse) => ({
          ...course,
          updatedAt: new Date(course.updatedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        })
      );
      setCourses(formattedCourses);
      setTotalPages(response.data.pagination.pageCount);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data.message || "Sorry, something went wrong!"
        );
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, [currentPage]);

  const handleClick = (id: string) => {
    navigator(`/instructor/mycourse/${id}`);
  };
  
  const publishClick = async (id: string) => {
    try {
      const { data } = await axios.put("/auth/tutor/publishCourse", { id });
      const updatedCourses = courses.map((course) =>
        course._id === id ? { ...course, isPublish: true } : course
      );
      setCourses(updatedCourses);
      toast.success(data.message);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1 ));
  };
 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1));
  };

  return (
    <div>
      <div className="   px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {courses.map((course) => (
          <div
            key={course._id}
            className="mt-7 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
              <img
                className="object-cover cursor-pointer w-full"
                src={course.image}
                onClick={() => handleClick(course._id)}
                alt={course.title}
              />
            </div>
            <div className="mt-4 px-5 pb-5">
              <div>
                <h5 className="text-lg font-medium tracking-tight  text-slate-900">
                  {course.title}
                </h5>
              </div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-2xl font-bold text-slate-900">
                 
                    ₹{course.price}
                  </span>
                </p>
                <div className="flex ">
                  <FcPlanner className="mr-1 mt-1" />
                  <p className=""> {course.updatedAt}</p>
                </div>
              </div>
              {course.isPublish ? (
                <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <ImCheckboxChecked className="mr-1 mt-1" />
                  Listed
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 cursor-pointer text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => publishClick(course._id)}
                >
                  <MdOutlinePublishedWithChanges className="mr-2 mt-1" />
                  Publish
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
      <Pagination>
<PaginationContent>
  <PaginationItem>
    <button className={`p-2 rounded-md ${currentPage === 1 ? 'bg-gray-50' : 'bg-gray-300'}`}
     disabled={currentPage===1} onClick={handlePrevPage}
       >Previous</button>
  </PaginationItem>
        

  {[...Array(totalPages)].map((_, index) => (
  <PaginationItem key={index}>
    <PaginationLink className="cursor-pointer" onClick={() => setCurrentPage(index + 1)}>{index + 1}</PaginationLink>
  </PaginationItem>
))}

<PaginationItem>
    <button className={`p-2 rounded-md ${currentPage === totalPages ? 'bg-gray-50' : 'bg-gray-300'}`}
    disabled = {currentPage===totalPages}
    
     onClick={handleNextPage}
          >Next</button>
  </PaginationItem>

</PaginationContent>
</Pagination>
</div>
</div>
  );
};

export default MyCourses;





