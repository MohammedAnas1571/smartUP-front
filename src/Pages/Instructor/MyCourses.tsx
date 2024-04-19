import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcPlanner } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


type MyCourse = {
  _id: string;
  status: string;
  image: string;
  updatedAt: string;
  title: string;
};

const MyCourses = () => {
  const [courses, setCourses] = useState<MyCourse[]>([]);
  const navigator = useNavigate()

  const fetchItems = async () => {
    try {
      const response = await axios.get(`/auth/tutor/myCourses/`);
      const formattedCourses = response.data.courses.map((course: MyCourse) => ({
        ...course,
        updatedAt: new Date(course.updatedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      }));
      setCourses(formattedCourses);
      console.log(courses)
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
 
    const handleClick = (id:string)=>{
      navigator(`/instructor/mycourse/${id}`)
    }


  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {courses.map((course, id) => (
        <article
          key={id}
          className="flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:-translate-y-2 hover:shadow-lg"
        >
          <div >
            <img onClick={() => handleClick(course._id)} 
              src={course.image}
              className="h-56 w-full object-cover cursor-pointer"
              alt="Course cover"
            />
            <div className="space-y-5 p-5">
              <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-lg">
                {course.title}
              </h3>
              <div className="border-b border-gray-200 "></div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FcPlanner className="mr-1" />
                  <p className="text-sm">{course.updatedAt}</p>
                </div>
                <span className="bg-red-300 rounded-md p-1">{course.status}</span>
              </div>
           
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MyCourses;
