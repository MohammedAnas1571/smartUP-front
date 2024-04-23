import { useFormik } from "formik";
import { addingSchema } from "@/validation/validation";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import {
  isLoading,
 } from "../../Redux/User/userSlics";


import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "@/components/AddCourse/Basic";
import Intermediate from "@/components/AddCourse/Intermediate";
import End from "@/components/AddCourse/End";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [change, setChange] = useState<string>("account");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      catagory: "",
      tags: "",
      price: "",
      level: "Beginners",
      content:"",
      description: "",
      image: "",
      preview: "",
    },
    validationSchema: addingSchema,
    onSubmit: async (values) => {
      console.log("fjsdkhfskjdfmkds",values)
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("subTitle", values.subTitle);
        formData.append("catagory", values.catagory);
        formData.append("tags", values.tags);
        formData.append("price", values.price);
        formData.append("level", values.level);
        formData.append("description", values.description);
        formData.append("content", values.content);
        formData.append("image", values.image);
        formData.append("preview", values.preview);
        
        // dispatch(isLoading());
                const {data}=  await axios.post(
          "/auth/tutor/course",
          
             formData ,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // dispatch(isLoading());
        toast.success(data);
        formik.resetForm()
        navigate("/instructor/courses")
      } catch (err) {
        if (axios.isAxiosError(err)&&err.response) {
          toast.error(err.response.data.message||"Something Went To Wrong");
      }
    }
  }
  })
  


  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue={change} value={change} className="w-[800px]  ">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger onClick={()=>setChange("account")} value="account">Basic info</TabsTrigger>
          <TabsTrigger onClick={()=>setChange("password")} value="password">Course Details</TabsTrigger>
          <TabsTrigger  onClick={()=>setChange("full")} value="full">Adding files</TabsTrigger>
        </TabsList>

        <form onSubmit={formik.handleSubmit}>
  
          <Basic formik={formik} setChange={setChange} />
          <Intermediate formik={formik} setChange={setChange}/>
          <End formik={formik} setChange={setChange}  />
        </form>



        </Tabs>
    </div>
   
  );
}

export default AddCourse;




























