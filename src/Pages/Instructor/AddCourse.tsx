import { useFormik } from "formik";
import { addingSchema } from "@/validation/validation";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import {
  isLoading
 } from "../../Redux/User/userSlics";


import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "@/components/AddCourse/Basic";
import Intermediate from "@/components/AddCourse/Intermediate";
import End from "@/components/AddCourse/End";
import { useDispatch } from "react-redux";

const AddCourse = () => {
  const [change, setChange] = useState<string>("account");
  const dispatch = useDispatch();
  
  const [formDataArray, setFormDataArray] = useState<FormData[]>([]);
  const handleSubmit = (formData: FormData) => {
    setFormDataArray([...formDataArray, formData]);
  };



  
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
        // formData.append("foo",JSON.stringify(formDataArray))
        dispatch(isLoading());
        const { data } = await axios.post(
          "/auth/tutor/course",
          
             formData ,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch(isLoading());
        toast.success("Course Created Successfully");
        formik.resetForm()
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
          <End formik={formik} setChange={setChange} fileSubmit={handleSubmit}  formDataArray= {formDataArray} setFormDataArray={setFormDataArray} />
        </form>



        </Tabs>
    </div>
   
  );
}

export default AddCourse;
































// const formik = useFormik({
// initialValues: {
//   title: "",
//   subTitle: "",
//   catagory: "",
//   tags: "",
//   price: "",
//   level: "Beginners",
//   description: "",
//   image: "",
//   preview:""
// },
// validationSchema: addingSchema,
// onSubmit: async (values) => {
//   try {
//     console.log("wewewe");

//     const formData = new FormData();
//     formData.append("title", values.title);
//     formData.append("subTitle", values.subTitle);
//     formData.append("catagory", values.catagory);
//     formData.append("tags", values.tags);
//     formData.append("price", values.price);
//     formData.append("level", values.level);
//     formData.append("description", values.description);
//     formData.append("image", values.image);
//     formData.append("preview", values.preview);

//     const { data } = await axios.post("/auth/tutor/course", {formData,formDataArray}, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     toast.success("Course Created Successfully");
//   } catch (err: any) {
//     if (err) {
//       toast(err.response.data.message);
//     }
//   }
// },
// });
// const handleClick =  ()=>{
// setSubmit(true)
// }

// return (
// <div className="flex justify-center items-center h-screen">
//   <div className="bg-slate-50 p-6 rounded-md shadow-xl w-full max-w-screen-md">
//     <form onSubmit={formik.handleSubmit}>
//       <div className="grid gap-6 mb-6 md:grid-cols-2">
//         <div >
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter Title"
//             onChange={formik.handleChange}
//           />
//           {formik.touched.title && formik.errors.title && (
//             <p className="text-red-600 text-sm ">{formik.errors.title}</p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             SubTitle
//           </label>
//           <input
//             type="text"
//             name="subTitle"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter subtitle"
//             onChange={formik.handleChange}
//           />
//           {formik.touched.subTitle && formik.errors.subTitle && (
//             <p className="text-red-600 text-sm  ">
//               {formik.errors.subTitle}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Catagory
//           </label>
//           <input
//             type="text"
//             name="catagory"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter Placeholder"
//             onChange={formik.handleChange}
//           />
//           {formik.touched.catagory && formik.errors.catagory && (
//             <p className="text-red-600 text-sm  ">
//               {formik.errors.catagory}
//             </p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Level
//           </label>
//           <select
//             name="level"
//             onChange={formik.handleChange}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           >
//             <option value="Beginners">Beginners</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Tags
//           </label>
//           <input
//             type="text"
//             name="tags"
//             className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter the tags"
//             onChange={formik.handleChange}
//           />
//           {formik.touched.tags && formik.errors.tags && (
//             <p className="text-red-600 text-sm  ">{formik.errors.tags}</p>
//           )}
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Price
//           </label>
//           <input
//             type="text"
//             name="price"
//             className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Enter amount"

//             onChange={formik.handleChange}
//           />
//           {formik.touched.price && formik.errors.price && (
//             <p className="text-red-600 text-sm  ">{formik.errors.price}</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//           Description
//         </label>
//         <textarea
//           name="description"
//           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Enter description"
//           onChange={formik.handleChange}
//         ></textarea>
//         {formik.touched.description && formik.errors.description && (
//           <p className="text-red-600 text-sm  ">
//             {formik.errors.description}
//           </p>
//         )}
//       </div>
//       <div className="grid gap-6 mb-6 md:grid-cols-2" >

//       <input
//         name="image"
//         className=" mt-5 p-2.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//         type="file"
//         accept="image/*"
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           formik.setFieldValue("image", e.currentTarget.files?.[0]);
//         }}
//       />
//       {formik.touched.image && formik.errors.image && (
//         <p className="text-red-600 text-sm">{formik.errors.image}</p>
//       )}

//       <input
//         name="preview"
//         className="block mt-5 p-2.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//         type="file"
//         accept="video/*"
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           formik.setFieldValue("preview", e.currentTarget.files?.[0]);
//         }}
//       />
//       {formik.touched.preview && formik.errors.preview && (
//         <p className="text-red-600 text-sm">{formik.errors.preview}</p>
//       )}
//   </div>
//       <button
//         type="submit"
//         className="text-white hover:opacity-90 bg-violet-700 mt-2 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         + Create
//       </button>
//       </form>
//       <button onClick={handleClick} type="button" className="text-white hover:opacity-90 bg-violet-700 mt-2 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">hloo</button>
//       {submit && <AddModules submit = {submit} setSubmit= {setSubmit} onSubmit= {handleSubmit}/> }

// </div>
// </div>
// )
// }
