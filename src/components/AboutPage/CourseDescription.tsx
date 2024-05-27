import { Chapters, CourseAbout, Reviews } from "@/CustomHook/useCourseDetails";
import BreadCrumps from "./BreadCrumps";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const CourseDescription = ({
  course,
  chapters,
  purchased,
  value,
  reviews,
}: {
  course: CourseAbout;
  chapters: Chapters[];
  purchased: boolean | undefined;
  value: number | undefined;
  reviews: Reviews[] | null | undefined;
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

                  <Card className="my-12">
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
                  <Card>
                  <CardHeader >
        <CardTitle>Reviews</CardTitle>
     
        <div className="flex h-10 items-center text-2xl font-bold text-blue-900">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {value}
        </div>
        
        <p className="text-sm text-gray-500">
            Average User Rating
        </p>
     
    </CardHeader>
                    <CardContent>
                      {reviews &&
                        reviews.map((review, index) => (
                          <div key={index} className="flex items-start">
                            <img
                              className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                              src={`/auth/${review.userId.profilePhoto}`}
                              alt=""
                            />

                            <div className="ml-6">
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((item) => {
                                  if (review.rating >= item) {
                                    return (
                                      <FaStar
                                        key={item}
                                        size={30}
                                        className="text-yellow-300"
                                      />
                                    );
                                  } else {
                                    return (
                                      <CiStar
                                        key={item}
                                        size={30}
                                        className="text-primary"
                                      />
                                    );
                                  }
                                })}
                              </div>
                              <p className="mt-2 max w-[600px] break-words text-base text-gray-900">
                                {review.review}
                              </p>
                              <p className="mt-2 text-sm font-bold text-gray-900">
                                {review.userId.username}
                              </p>
                              <p className="mt-1 text-sm text-gray-600">
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
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

                          <div>
                            {purchased === true ? (
                              <Link to={`/viewCourse/${course._id}`}>
                                <button className="bg-violet-700 p-2 w-full rounded-md text-white">
                                  View
                                </button>
                              </Link>
                            ) : (
                              <button
                                onClick={handleClick}
                                className="bg-violet-700 p-2 w-full rounded-md text-white"
                              >
                                Purchase
                              </button>
                            )}
                          </div>
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
