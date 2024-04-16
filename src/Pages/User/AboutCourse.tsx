import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Course } from "./Home";
import CourseDescription from "@/components/AboutPage/CourseDescription";

export type courseAbout = Course & {
  description: string;
  subTitle: string;
  catagory: string;
  tags: string;
  updatedAt: string;
  preview:string
};

const AboutCourse = () => {
  const { id } = useParams();
  const [data, setData] = useState<courseAbout>();
  

  const fetchData = async () => {
    try {
      const response = await axios.get(`/auth/getDetails/${id}`);
     
      const formattedUpdatedAt = new Date(response.data.course.updatedAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      setData({...response.data.course, updatedAt: formattedUpdatedAt});
    ;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <>
      {data && <CourseDescription course={data} />}
    </>
  );
};

export default AboutCourse;
