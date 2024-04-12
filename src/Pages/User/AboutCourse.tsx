import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AboutCourse = () => {
 const {id}= useParams()


  console.log(id)
   useEffect(()=>{
    try{
      const {data} =   axios.get(`/auth/getDetails/${id}`)
        const 


    }catch(err){
        if (axios.isAxiosError(err) && err.response) {
            toast(err.response.data.message||"Sorry Something  went wrong!")

    }
}


   },[id])
  
  return (
    <div>
     
    </div>
  )
}

export default AboutCourse