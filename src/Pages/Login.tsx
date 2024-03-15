import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "../Redux/User/userSlics";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

import { useFormik } from "formik";
import { SignInSchema } from "@/validation/validation";


import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  
  
  const URL = 'http://localhost:3000'
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const navigate =useNavigate()

  const formik = useFormik({
    initialValues: {
   
      email: "",
      password: "",
     
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        dispatch(signUpStart());
        
        const { data } = await axios.post("/auth/signIn", values);
        dispatch(signUpSuccess(data));
        navigate("/")
      } catch (err: any) {
        if ( err) {
          toast(err.response.data.message);
        dispatch( signUpFailure())
      }
    }
    },
  });
  return (
    <div className="bg-slate-200 flex justify-center items-center w-screen h-screen">
    <Card className="w-[400px] p-5 shadow-xl  ">
      <h1 className="text-3xl  font-semibold  mb-2">
        Sign in your account
      </h1>
      <p className="mb-2 font-medium">Enter your email and password below </p>
      <form onSubmit={formik.handleSubmit} className="space-y-3">
        <div className="flex  justify-between mt-5 ">
          <Button className="w-40" >
            <img className="w-5 mr-2 " src= "icons8-google-30 (1).png" alt="" />
            {/* <img className="w-5 mr-2 hidden dark:block" src= "icons8-google-30 (3).png" alt="" /> */}
            Google
          </Button>
          <Button className="w-40 hover:opacity-85">
            <img className="w-5 mr-2 " src="icons8-facebook-f-24.png" alt="" />
            facebook
          </Button>
        </div>

        <div className="flex  items-center gap-2 pt-3 text-slate-700">
          <div className="h-px w-full bg-slate-300"></div>
          OR
          <div className="h-px w-full bg-slate-300"></div>
        </div>
       
      
        <Input
          type="email"
          placeholder=" Enter email"
          name="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
         
        />
    {formik.touched.email && formik.errors.email && (
          <div className="text-red-600 text-sm  ">{formik.errors.email}</div>
        )}
        <Input
          type="password"
          placeholder=" Enter password"
          // value={formData.password}
          name="password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
       
       {formik.touched.password && formik.errors.password && (
          <div className="text-red-600 text-sm ">{formik.errors.password}</div>
        )}
        

        <div className="flex items-center  space-x-2 py-2">
          <Checkbox name="acceptTerms" />
          <Label  htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <Button type="submit" className="w-full">
            {loading ? <span className="loader "></span> : "Submit"}
          </Button>
      </form>
      <div className="grid pt-2 gap-2">
        <span>
        <Link
            to="/forgotPassword"
            className="text-violet-800 font-normal "
          >
            Forgot Password
          </Link>
        </span>
      
          
      <div className="flex gap-2 ">
        <p>Don't have an account? </p>
        <Link to="/signUp">
          <span className="text-violet-800 font-medium">Register </span>
        </Link>
      </div>
      </div>
    </Card>
    </div>
  );
};

export default Login;
