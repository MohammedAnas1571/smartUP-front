import { useFormik } from "formik";
import { addingSchema } from "@/validation/validation";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { isLoading, isSuccess, isFailed } from "../../Redux/Tutor/tutorSlice";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "@/components/AddCourse/Basic";
import Intermediate from "@/components/AddCourse/Intermediate";
import End from "@/components/AddCourse/End";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [change, setChange] = useState<string>("step-1");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      catagory: "",
      tags: "",
      price: "",
      level: "Beginners",
      content: "",
      description: "",
      image: "",
      preview: "",
    },
    validationSchema: addingSchema,
    onSubmit: async (values) => {
      dispatch(isLoading());
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

        const { data } = await axios.post(
          "/auth/tutor/course",

          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        toast.success(data);
        dispatch(isSuccess());
        formik.resetForm();
        navigate("/instructor/courses");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast.error(err.response.data.message || "Something Went To Wrong");
          dispatch(isFailed());
        }
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue={change} value={change} className="w-[800px]  ">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger  value="step-1">
            Basic info
          </TabsTrigger>
          <TabsTrigger  value="step-2">
            Course Details
          </TabsTrigger>
          <TabsTrigger  value="step-3">
            Adding files
          </TabsTrigger>
        </TabsList>

        <form onSubmit={formik.handleSubmit}>
          <Basic formik={formik} setChange={setChange} />
          <Intermediate formik={formik} setChange={setChange} />
          <End formik={formik} setChange={setChange} />
        </form>
      </Tabs>
    </div>
  );
};

export default AddCourse;
