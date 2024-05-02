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
};

export const useCourseDetails = (id: string) => {
  const [course, setData] = useState<CourseAbout | null>();
  const [invoke, setInvoke] = useState<boolean>(false);
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
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [invoke]);
  
  return { course, chapters,setInvoke };
};
