import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CourseDetails from "@/components/Home/CourseDetails";
import Advertisment from "@/components/Home/Advertisment";
import api from "@/Utils/api";


export type Course = {
  _id: string;
  title: string;
  tutorId: {
    _id: string;
    username: string;
    about: string;
    profession: string;
    profilePhoto: string;
  };
  image: string;
  level: string;
  price: number;
};

const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("/auth/new-courses");
      setCourses(data);
    
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry Something  went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);



  return (
    <div>
    
      <div className=" max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-white bg-black/10  flex flex-col justify-center ">
            {/* <h1 className="pl-8 text-4xl sm:text-5xl:md:6xl lg:7xl font-bold">
              Experiance{" "}
            </h1> */}
            {/* <p className="pl-8 text-4xl sm:text-5xl:md:6xl lg:7xl font-bold">
              {" "}
              The Best<span className="text-orange-600 "> Learning</span> with
              Us
            </p> */}
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?t=st=1713501108~exp=1713504708~hmac=90438bba979f81ad6b20dde9f4e1d1ff10e8d4c1287ec36305f4bd245847a78c&w=740"
          />
        </div>
      </div>
      <div className=" max-w-[1250px] mx-auto px-2 ">
        <Advertisment />
        {courses && <CourseDetails courses={courses} />}
      </div>
    </div>
  );
};

export default Home;
