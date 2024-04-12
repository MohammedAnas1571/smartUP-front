import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import axios from "axios";
import {
isLoading,loginFailed,loginSuccess
} from "@/Redux/User/userSlics";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { verificationSchema } from "@/validation/validation";
import { toast } from "sonner";
import { useState } from "react";
import Alert from "@/components/Alert";

 export const EmailConfirm = () => {

  const [submit, setSubmit] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: verificationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        dispatch(isLoading());

        await axios.post(`/auth/tutor/verification`, values);
        dispatch(loginSuccess());
        setSubmit(true);
      } catch (err: any) {
        if (axios.isAxiosError(err)&&err.response) {
          toast.error(err.response.data.message||"Something Went To Wrong");
        dispatch(loginFailed())
       }
      }
    },
  });

  return (
    
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-2xl p-12">
        <form onSubmit={formik.handleSubmit} className="text-center space-y-6">
          <div className="flex justify-center ">
            <img src="/icons8-verification-100.png" alt="email icon" />
          </div>
          <h1 className="text-4xl flex justify-center font-mono font-semibold mb-3">
            Verification
          </h1>
          <p className="mb-5 font-medium font-serif">Please enter your email</p>
          <Input
            className="bg-slate-100"
            type="email"
            placeholder=" Enter your email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-600 text-sm  ">
              {formik.errors.email}
            </div>
          )}
          {submit?  <Alert email={formik.values.email} />:<Button type="submit" className="p-6 w-80 text-lg">
            {loading ? <span className="loader "></span> : "Submit"}
          </Button>}
          
        </form>
      </div>
    </div>
  );
};
