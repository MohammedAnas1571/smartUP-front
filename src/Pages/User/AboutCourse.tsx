import { useParams } from "react-router-dom";

import CourseDescription from "@/components/AboutPage/CourseDescription";
import { useCourseDetails } from "@/CustomHook/useCourseDetails";

const AboutCourse = () => {
  const { id } = useParams();
  const { course, chapters } = useCourseDetails(id!);
  console.log(chapters);

  return (
    <>{course && <CourseDescription course={course} chapters={chapters!} />}</>
  );
};

export default AboutCourse;
