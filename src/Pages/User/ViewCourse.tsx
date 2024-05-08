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
  
      <div className='flex justify-around ' >
       {selected && (
          <video key={selected._id} controls width="700" height="600" className=" h-[400px] border bg-black">  
          <source src={selected.videoUrl} type="video/mp4"/> 
        </video>
 )}
        <div className="w-96 h-96 rounded-md shadow-md overflow-y-auto overflow-hidden" >
          <h1 className="flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl">Chapters</h1>
        {chapters.map((chapter,index) => (
          <div className={`py-5 px-5 text-left transition-colors transform focus:bg-black cursor-pointer ${selected
            === chapter?"bg-slate-200":" hover:bg-slate-100"}
          }  whitespace-nowrap`} onClick = {()=>setSelected(chapter)}>
            <p   className="text-lg capitalize font-serif ">{index+1}.{chapter.name}</p> 
          </div>
        ))}
       
        </div>
      </div>
  </div>
  )
}
export default ViewCourse