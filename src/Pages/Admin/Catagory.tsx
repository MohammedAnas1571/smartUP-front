


import CatagoryAdding from "@/components/Admin/CatagoryAdding"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
 
  CardFooter,

} from "@/components/ui/card"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"
type CatagoriesDetails ={
  name:string;
  _id:string
}


const Catagory = () => {
  const [change,setChange] = useState<boolean>(false)
  const[catagories, setCatagories]=useState<CatagoriesDetails[]>([])
  const fetchUsers = async () => {
    try {
         const {data} =await axios.get("/auth/admin/catagory");
        setCatagories(data.catagories);
    }catch (err) {
      if (axios.isAxiosError(err)&&err.response) {
        toast.error(err.response.data.message||"Something Went To Wrong");
     
     }
}
}

useEffect(() => {
    fetchUsers();
}, [change]);

 
  return (

    <>
    
    <div className="my-5 mx-5 flex justify-end ">
      {change &&( <CatagoryAdding change={change} setChange={setChange}/>)}
       <button onClick={()=>setChange(true)} className="bg-teal-700 rounded-lg p-3 text-white font-medium ">+ Create Catagory</button>
    </div>
    <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-7 px-4">
    {catagories.map((catagory)=>(
   
    <Card className="w-[400px]">
     
      <CardContent className="mt-5">
       
        <div key={catagory._id}  className=" w-full items-center ">
              <h1 className="text-lg font-medium">{catagory.name}</h1>
                 </div>
    
      </CardContent>
      <CardFooter className="flex justify-end space-x-3">
        <Button variant="outline">Edit</Button>
       
        <Button>Delete</Button>
      </CardFooter>
    </Card>

))}
</div>
    </>
  )
}

export default Catagory