import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"

type ChapterDetails = {
  _id:string;
  name:string;
  order:number;
  videoUrl:string
}

const ViewCourse = () => {
  const [chapters,setChapter] = useState<ChapterDetails[]>([])
  const [selected,setSelected] = useState<ChapterDetails|null>(null)
  const {id} = useParams()
  console.log(id)
  const fetchData =async()=>{
    try{
    const {data} =  await axios.get(`/auth/modules/${id}`)
    setChapter(data.chapters)
    if( data.chapters.length>0){
      setSelected(data.chapters[0])
    }
    }
    catch(err){
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  console
  return (
    <div className="py-10 px-8">
  
      <div className='flex justify-around' >
       {selected && (
          <video key={selected._id} controls width="700" height="600" className="object-">  
          <source src={selected.videoUrl} type="video/mp4"/> 
        </video>
 )}
        <div className="w-96 border border-r-2 rounded-md shadow-md" >
          <h1 className="flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl">Chapters</h1>
        {chapters.map((chapter) => (
          <div className="py-5 px-5 text-left bg-gray-100 whitespace-nowrap">
            <p  onClick = {()=>setSelected(chapter)} className="text-xl font-bold cursor-pointer">{chapter.order}.{chapter.name}</p> 
          </div>
        ))}
        </div>
      </div>
  </div>
  )
}
export default ViewCourse