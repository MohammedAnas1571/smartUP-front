import { useParams } from "react-router-dom";

import CourseDescription from "@/components/AboutPage/CourseDescription";
import { useCourseDetails } from "@/CustomHook/useCourseDetails";

const AboutCourse = () => {
  const { id } = useParams();
  const { course } = useCourseDetails(id!);

  return <>{course && <CourseDescription course={course} />}</>;
};

export default AboutCourse;
