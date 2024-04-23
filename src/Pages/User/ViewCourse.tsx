import axios from "axios"
import { useParams } from "react-router-dom"
import { toast } from "sonner"


const ViewCourse = () => {
  const {id} = useParams()
  const fetchdata =async()=>{
    try{
      await axios.get("/auth/modules",{id})

    }catch(err){
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  }
  return (
    <div className="py-10 px-8">
      <div className='flex  justify-around'>
      <video controls width="800" height="800"  >  
        <source src="https://www.youtube.com/watch?v=72iEz5iopqQ" type="video/mp4"/>  
      </video> 
      <div className="w-96 border border-r-2 rounded-md shadow-md">
        <h1 className=" flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl ">Chapters</h1>
        <div className="py-5 px-5 text-left bg-gray-100 whitespace-nowrap ">
        <p></p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default ViewCourse