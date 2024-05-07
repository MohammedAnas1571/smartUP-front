import { Chapters, CourseAbout } from "@/CustomHook/useCourseDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaTrash } from 'react-icons/fa';
import axios from "axios";
import { toast } from "sonner";

const DetailDescription = ({
  course,
  chapters,
  setChapters
 
}: {
  course: CourseAbout;
  chapters: Chapters[]|null;
  setChapters:React.Dispatch<React.SetStateAction<Chapters[] |null>>

}) => {
  const deleteChapter = async(chapterId: string) => {
    try{
    const {data} = await axios.delete(`/auth/tutor/deleteChapter/${chapterId}`)

    setChapters (data.remainingChapters)
    toast.success(data.message)

     
  }catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      toast.error(err.response.data.message || "Something went wrong");
    } 
  }
}

  return (
    <div>
      <div className="bg-black dark:bg-gray-800 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col md:flex-row -mx-4">
            <div className="md:w-[400px] px-4">
              <div className="h-[250px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={course?.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 capitalize ">
              <h2 className="  text-4xl font-bold text-white dark:text-white mb-2">
                {course?.title}
              </h2>
              <h2 className="  text-xl font-bold  text-white dark:text-white mb-2">
                {course?.subTitle}
              </h2>

              <div>
                <span className="font-bold text-white dark:text-gray-300">
                  Level:
                </span>
                <span className="text-white dark:text-gray-300">
                  {" "}
                  {course?.level}
                </span>
              </div>
              <div className="mr-4">
                <span className="font-bold text-white dark:text-gray-300">
                  Catagory:
                </span>
                <span className="text-white dark:text-gray-300">
                  {" "}
                  {course.catagory.name}
                </span>
              </div>
              <div>
                <span className="font-bold text-white dark:text-gray-300">
                  Created At:
                </span>
                <span className="text-white dark:text-gray-300">
                  {" "}
                  {course?.updatedAt}
                </span>
              </div>
              <div>
                <span className="font-bold text-white dark:text-gray-300">
                  Tag:
                </span>
                <span className="text-white dark:text-gray-300">
                  {" "}
                  {course?.tags}
                </span>
              </div>

              <div className="flex mb-4 ">
                <div className="mr-4">
                  <span className="font-bold text-white dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-white dark:text-gray-300">
                    {" "}
                    ₹{course?.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-gray-300">
                    Status:
                  </span>
                  <span className=" text-white"> {course?.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto  py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-serif font-bold text-gray-700 mb-2 mt-4 ">
          About this course
        </h1>
        <p className="capitalize mb-4  font-serif">{course?.description}</p>
        <div className="border"></div>
        <p className="text-2xl font-serif font-bold text-gray-700 mb-2 mt-4 ">
          Whats is the inside{" "}
        </p>
        <p className="capitalize font-serif">{course?.content}</p>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif font-bold text-gray-700 ">
              Chapters
            </CardTitle>
            <CardDescription>Course Includes:</CardDescription>
          </CardHeader>
          {chapters?.map((chapter, index) => (
            <CardContent key={chapter._id}>
              <div className="flex justify-between items-center">
                <span>{index + 1}.{chapter.name}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteChapter(chapter._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </CardContent>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DetailDescription;
