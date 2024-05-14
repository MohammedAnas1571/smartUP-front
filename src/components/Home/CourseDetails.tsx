 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Course } from "../../Pages/User/Home"

import CourseCard from "./CourseCard";


interface ShortDescription {
  courses: Course[];
}

const CourseDetails = ({courses}:ShortDescription) => {
  return (
    <div >
    <Carousel className="max-w-screen mx-auto ">
    <CarouselContent className="-ml-1">
      {courses.map((course, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
          <CourseCard course={course} />
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