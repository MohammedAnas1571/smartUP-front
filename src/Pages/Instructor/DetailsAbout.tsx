import { useCourseDetails } from "@/CustomHook/useCourseDetails";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { AddModules } from "@/components/AddModules"
import { useState } from "react";

const DetailsAbout = () => {
  const [change,setChange] = useState<boolean>(false)
  const { id } = useParams();
  const { course } = useCourseDetails(id!);

  const status = course?.status;
  let statusClass;
  if (status === 'Pending') {
    statusClass = 'bg-yellow-400 p-2 rounded-md';
  } else  {
    statusClass = 'bg-green-400 p-2 rounded-md';
  }
  return (
    <div>
    <div className="bg-gray-100 dark:bg-gray-800 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col md:flex-row -mx-4">
            <div className="md:w-[400px] px-4">
                <div className="h-[250px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={course?.image} alt="Product Image"/>
                </div>
               
            </div>
            <div className="md:flex-1 px-4 ">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{course?.title}</h2>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{course?.subTitle}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {course?.content}
                </p>
               <div className="mb-4">
                 {change &&(<AddModules change={change} setChange={setChange} courseId={id!}/>)}
                <Button onClick={()=>{setChange(true)}} className="uppercase bg-violet-700">+Add new modules</Button>
                </div>
                 <div className="flex mb-4 ">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300"> ₹{course?.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Status:</span>
                        <span className={`text-gray-600 dark:text-gray-300 mx-3  ${statusClass}`}> {course?.status}</span>
                    </div>
                </div>
               
                
              
            </div>
        </div>
        </div> 
    </div>
    <div className="max-w-6xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-3xl mb-2  ">About this course</h1>
        <p>{course?.description}</p>
      </div>
      
      </div>
    </div>
    

  )
}

export default DetailsAbout









