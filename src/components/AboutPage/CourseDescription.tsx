import { courseAbout } from "@/Pages/User/AboutCourse";
import BreadCrumps from "./BreadCrumps";

import { useNavigate } from "react-router-dom";

interface Details {
  course: courseAbout;
}
const CourseDescription = ({ course }: Details) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/payment/${course._id}`);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between container gap-12">
        <div className=" break-words w-full space-y-3">
          <BreadCrumps catagory={course.catagory} tags={course.tags} />
          <h1 className="text-3xl font-serif font-bold mb-2">{course.title}</h1>
          <p className="  text-xl font-light">{course.subTitle}</p>
          <p className="">
            {" "}
            Created by{" "}
            <span className="text-lg text-indigo-700 font-medium">
              {course.tutorId.username}
            </span>
          </p>
          <p className="">{course.description}</p>
          <p>
            Last Updated <span>{course.updatedAt}</span>
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quasi omnis ratione, laudantium totam, dolorem illo voluptas culpa
            officia magnam odit ad facere vel maxime aspernatur numquam cum
            dolorum fuga?
          </p>
        </div>
        <article className="mx-auto w-[30rem] top-22 flex flex-col h-fit  overflow-hidden rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:-translate-y-2 hover:shadow-lg">
          <video controls>
            <source src={course.preview} type="video/mp4" />
          </video>
          <div className="flex-auto p-5">
            <span className="mb-2 bg-slate-200 p-1 text-sm font-semibold">
              {course.level}
            </span>

            <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-xl">
              {course.title}
            </h3>
            <div className="bg-slate-200 "></div>
            <h2 className=""> {course.tutorId.username}</h2>
            <p className="mb-6 mt-1 text-xl font-semibold">₹{course.price}</p>
            <button
              onClick={handleClick}
              className="bg-violet-700 p-2 w-full rounded-md text-white"
            >
              Purchase
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseDescription;
