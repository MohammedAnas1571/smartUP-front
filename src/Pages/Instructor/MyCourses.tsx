import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FcPlanner } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {  MdOutlineAddHomeWork } from "react-icons/md";


type MyCourse = {
  _id: string;
  image: string;
  updatedAt: string;
  title: string;
  price:string;
  isPublish:boolean;
  
 
};

const MyCourses = () => {
  const [courses, setCourses] = useState<MyCourse[]>([]);
  const [publish,setPublish] = useState<boolean>(false)
  
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
      
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
 
    const handleClick = (id:string)=>{
      navigator(`/instructor/mycourse/${id}`)
    }
  const publishClick = async (id:string)=>{
   
    try{
      await axios.put("/auth/tutor/publishCourse/",{id})
     

    }catch(err){
      if (axios.isAxiosError(err)&&err.response) {
        toast.error(err.response.data.message||"Something Went To Wrong");
    }
    }
  }
  return (

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {courses.map((course, id) => (
    <div key={id} className="m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
        <img className="object-cover  cursor-pointer w-full" src={course.image} onClick={() => handleClick(course._id)}  alt={course.title} />
      </div>
      <div className="mt-4 px-5 pb-5">
        <div >
          <h5 className="text-xl tracking-tight font-semibold text-slate-900">{course.title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900"> ₹{course.price}</span>
          </p>
          <div className="flex font-medium ">
          <FcPlanner className="mr-1 mt-1" />
          <p className=""> {course.updatedAt}</p>
          </div>
        </div>
     { course.isPublish ?   <div className="flex items-c enter justify-center rounded-md bg-slate-900 px-5 py-3
         text-center text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" >
        <MdOutlineAddHomeWork className="mr-1 mt-1"/>
          Listed
        </div>
        :
        <div className="flex items-c enter justify-center rounded-md bg-slate-900 px-5 py-3 cursor-pointer
         text-center text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={()=>publishClick(course._id)}>
        <MdOutlineAddHomeWork className="mr-1 mt-1"/>
          Publish
        </div>
  }
      </div>
    </div>
  ))}
</div>

)
}

export default MyCourses;