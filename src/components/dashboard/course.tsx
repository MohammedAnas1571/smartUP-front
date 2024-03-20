import { useState } from "react";
import { AddItem } from "./addItems";

const Courses = () => {
  const [submit, setSubmit] = useState<boolean>(false);

  const handleChange = ()=>{
    setSubmit(true)
  }
  return (
    <div className="mr-5 ">
      <div className="group mx-2 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden    sm:grid-cols-5">
        <div className="col-span-2 text-left text-gray-600 hover:text-gray-700">
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src="/Group 6325.png"
              alt=""
              className="h-80 border-none object-cover text-gray-700 "
            />
          </div>
        </div>
        <div className="col-span-3 flex flex-col space-y-5  text-left">
          <div className="mt-3 overflow-hidden text-3xl font-semibold">
            Create an Engaging Course{" "}
          </div>
          <p className="overflow-hidden ">
            Create an Engaging Course Whether you've been teaching for years or
            are teaching for the first time, you can make an engaging course.
          </p>
          <AddItem submit={submit} setSubmit={setSubmit} />
          <button  onClick={handleChange} className="my-5 rounded-sm  px-5 py-3 text-center font-bold transition text-lg  bg-violet-700  text-white sm:me-auto">
            Create Your Course
          </button>

        </div>
      </div>
    </div>
  );
};

export default Courses;
