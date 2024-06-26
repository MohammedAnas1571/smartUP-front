import { Course } from '@/Pages/User/Home'
import { useNavigate } from 'react-router-dom';


const CourseCard = ({course}:{course:Course}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="py-6  cursor-pointer"onClick={()=>navigate(`/course-details/${course._id}`)}>
          <article className="mx-auto w-[320px]  flex flex-col  overflow-hidden rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:-translate-y-2 hover:shadow-lg">
     <div>
        <img src={course.image} className="h-56 w-full object-cover" alt="something wrong" />
        <div className="flex-auto p-5">
          <span className="mb-2 bg-slate-200 p-1 text-sm font-semibold">{course.level}</span>
          
          <h3 className="mt-3 mb-2 text-xl text-black font-bold xl:text-xl">{course.title}</h3> 
          <div className="bg-slate-200 "></div>
          <h2 className=""> {course.tutorId.username}</h2>
          <p className="mb-6 mt-1 text-xl font-semibold">₹{course.price}</p>
         
        </div>
        </div>
    </article>
          </div>
    </div>
  )
}

export default CourseCard