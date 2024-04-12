 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Course } from "../../Pages/User/Home"
import { useNavigate } from "react-router-dom";


interface AdvertismentProps {
  course: Course[];
}

const CourseDetails = ({course}:AdvertismentProps) => {
  const navigate = useNavigate()

  const handleClick = (id:string)=>{


    navigate(`/course-details/${id}`)
  }
 
  return (
    <div >
    <Carousel className=" max-w-[1200px] mx-auto ">
    <CarouselContent className="-ml-1">
      {course.map((course, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
          <div className="p-1 cursor-pointer"onClick={()=>handleClick(course._id)}>
          <article className="mx-auto w-[350px] flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:-translate-y-2 hover:shadow-lg">
     <div>
        <img src={course.image} className="h-56 w-full object-cover" alt="something wrong" />
        <div className="flex-auto p-5">
          <span className="mb-2 bg-slate-200 p-1 text-sm font-semibold">{course.level}</span>
          
          <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-xl">{course.title}</h3> 
          <div className="bg-slate-200 "></div>
          <h2 className=""> {course.tutorId.username}</h2>
          <p className="mb-7 mt-1 text-xl font-semibold">₹{course.price}</p>
         
        </div>
        </div>
    </article>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>
)
  
}

export default CourseDetails