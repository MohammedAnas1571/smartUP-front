import { Chapters, CourseAbout } from "@/CustomHook/useCourseDetails";
import BreadCrumps from "./BreadCrumps";


import {
  Card,
  CardContent,
  CardDescription,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router-dom";

const CourseDescription = ({
  course,
  chapters,
}: {
  course: CourseAbout;
  chapters: Chapters[];
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/payment/${course._id}`);
  };

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4"></div>
              <div className="grid gap-4  lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start  lg:col-span-2  ">
                  <BreadCrumps catagory={course.catagory} tags={course.tags} />
                  <h1 className="text-3xl font-serif font-bold my-2">
                    {course.title}
                  </h1>
                  <p className="  text-xl font-light mb-2">{course.subTitle}</p>
                  <p className="mb-2">
                    {" "}
                    Created by{" "}
                    <span className="text-lg text-indigo-700 font-medium">
                      {course.tutorId.username}
                    </span>
                  </p>
                  <p className="mb-2">{course.description}</p>
                  <p className="mb-2">{course.content}</p>

                  <p>
                    Last Updated:
                    <span className="text-slate-600"> {course.updatedAt}</span>
                  </p>

                  <Card className="mt-12">
                    <CardHeader>
                      <CardTitle>What you'll learn</CardTitle>
                      <CardDescription>Course Includes:</CardDescription>
                    </CardHeader>
                    {chapters.map((chapter, index) => (
                      <CardContent>
                        {index + 1}.{chapter.name}
                      </CardContent>
                    ))}
                  </Card>
                  {/* <Card >
                    <CardHeader>
                      <CardTitle>Product Category</CardTitle>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card> */}
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card className="overflow-hidden">
                    <CardContent>
                      <article className="mt-5">
                        <video controls>
                          <source src={course.preview} type="video/mp4" />
                        </video>
                        <div className="flex-auto w- full mt-5 px-2">
                          <span className="mb-2 bg-slate-200 p-1 text-sm font-semibold">
                            {course.level}
                          </span>

                          <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-xl">
                            {course.title}
                          </h3>
                          <div className="bg-slate-200 "></div>
                          <h2 className=""> {course.tutorId.username}</h2>
                          <p className="mb-6 mt-1 text-xl font-semibold">
                            ₹{course.price}
                          </p>
                          <button
                            onClick={handleClick}
                            className="bg-violet-700 p-2 w-full rounded-md text-white"
                          >
                            Purchase
                          </button>
                        </div>
                      </article>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Your Tutor</CardTitle>
                      <CardDescription>
                        <div className="flex justify-between items-center  ">
                          <div className="grid items-center text-md">
                            <p>{course.tutorId.username}</p>
                            <p>{course.tutorId.profession}</p>
                          </div>
                          <img
                            className="w-24 h-24 rounded-full object-cover"
                            src={`/auth/${course.tutorId.profilePhoto}`}
                            alt="gdgf"
                          />
                        </div>
                      </CardDescription>
                    </CardHeader>

                    <CardContent>{course.tutorId.about}</CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;

// // <div className="mt-8">
// // <div className="flex justify-between container gap-12">
// //   <div className=" break-words w-full space-y-3">
// //     <BreadCrumps catagory={course.catagory} tags={course.tags} />
//     <h1 className="text-3xl font-serif font-bold mb-2">{course.title}</h1>
//     <p className="  text-xl font-light">{course.subTitle}</p>
//     <p className="">
//       {" "}
//       Created by{" "}
//       <span className="text-lg text-indigo-700 font-medium">
//         {course.tutorId.username}
//       </span>
//     </p>
//     <p className="">{course.description}</p>
//     <p className="">{course.content}</p>
//     <p>
//       Last Updated <span>{course.updatedAt}</span>
//     </p>
//   </div>
//   <article className="mx-auto w-[30rem] top-22 flex flex-col h-fit  overflow-hidden rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:-translate-y-2 hover:shadow-lg">
//     <video controls>
//       <source src={course.preview} type="video/mp4" />
//     </video>
//     <div className="flex-auto p-5">
//       <span className="mb-2 bg-slate-200 p-1 text-sm font-semibold">
//         {course.level}
//       </span>

//       <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-xl">
//         {course.title}
//       </h3>
//       <div className="bg-slate-200 "></div>
//       <h2 className=""> {course.tutorId.username}</h2>
//       <p className="mb-6 mt-1 text-xl font-semibold">₹{course.price}</p>
//       <button
//         onClick={handleClick}
//         className="bg-violet-700 p-2 w-full rounded-md text-white"
//       >
//         Purchase
//       </button>
// //     </div>
// //   </article>
// // </div>
// // </div>
