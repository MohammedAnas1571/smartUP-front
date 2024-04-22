
import { useParams } from "react-router-dom";

import { Course } from "./Home";
import CourseDescription from "@/components/AboutPage/CourseDescription";
import { useCourseDetails } from "@/CustomHook/useCourseDetails";

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
  const { course } = useCourseDetails(id!);

  return (
    <>
      {course && <CourseDescription course={course} />}
    </>
  );
};

export default AboutCourse;








