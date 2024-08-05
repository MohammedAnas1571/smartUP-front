import { useState, useEffect } from "react";
import axios from "axios";
import { Course } from "@/Pages/User/Home";
import { toast } from "sonner";


export type CourseAbout = Course & {
  description: string;
  subTitle: string;
  catagory: { name: string };
  tags: string;
  updatedAt: string;
  preview: string;
  content: string;
  status: string;
};

export type Chapters = {
  name: string;
  _id:string
};
export type Reviews = {
  review:string;
  rating:number;
  userId:{username:string;profilePhoto:string}
  createdAt:string
}



export const useCourseDetails = (id: string) => {
  const [course, setData] = useState<CourseAbout | null>();
  const [purchased,setPurchased] = useState()
  const[reviews,setReviews] = useState<Reviews[]|null>()
  const[value,setValue] = useState()

  const [chapters, setChapters] = useState<Chapters[] | null>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/auth/getDetails/${id}`);
      

      const formattedUpdatedAt = new Date(
        response.data.course.updatedAt
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      
  
      setData({ ...response.data.course, updatedAt: formattedUpdatedAt });
      setChapters(response.data.chapters);
      setPurchased(response.data.isPurchased)
      setReviews(response.data.reviews)
      setValue(response.data.averageRating)
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return { course, chapters,setChapters,purchased,value,reviews };
};
