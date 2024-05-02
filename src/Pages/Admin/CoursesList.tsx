
import { Button } from "@/components/ui/button";
import { Card, CardContent, } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type courseDescption = {
  image: string;
   status:string;
   title:string;
   _id: string;
}


const CoursesList = () => {
  const [courses, setCourses] = useState<courseDescption[]>([]);
  const navigate = useNavigate()
  
  const fetchCourses =async() => {
    try {
      const { data } = await axios.get("/auth/admin/getCourses");
      setCourses(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
    
  };
 
  useEffect(()=>{
    fetchCourses()
 },[])
 const handleView =  (id : string)=>{
   navigate(`/admin/course/${id}`)
 }
  return (
    <div>
      
      <div className="grid grid-cols-1  md:grid-cols-3 gap-2 mt-5 px-4">
              {courses.map((course)=>   
        <Card onClick={()=>handleView(course._id)} className="w-full h-48 shadow-xl relative cursor-pointer "  style={{ backgroundImage: `url(${course.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <CardContent className="flex justify-center items-center w-full h-full">
       
              <h1 className="text-2xl text-white font-bold"> {course.title}</h1>
          </CardContent>
            <Button className={`absolute bottom-4 right-4 ${course.status==="Pending"? " text-red-500 bg-":"text-green-500"} `} variant="outline">{course.status}</Button>
        </Card>
        
           )}
      </div>
    </div>
  );
};

export default CoursesList;
