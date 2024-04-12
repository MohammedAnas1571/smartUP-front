import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import {
 isLoading,loginFailed,loginSuccessData,isUserLogin
} from "../../Redux/User/userSlics";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

import { useFormik } from "formik";
import { SignInSchema } from "@/validation/validation";


import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  
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
  
      try {
        dispatch(isLoading());
        
        const { data } = await axios.post("/auth/signIn", values);
        dispatch(loginSuccessData(data))
        console.log(data)
        if(data.user.isVerified === true){
        dispatch(isUserLogin())
        navigate("/")
        }else{
          navigate("/otp")
          toast.warning("Please Verify Your Email Address");
        }
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast.error(err.response.data.message||" Sorry Something  Went Wrong!");
          dispatch(loginFailed())
        }
    }
    },
  });
  return (
    <div className="flex justify-center items-center w-screen h-screen">
    <Card className="w-[400px] p-5 shadow-xl  ">
      <h1 className="text-3xl  font-semibold  mb-2">
        Sign in your account
      </h1>
      <p className="mb-2 font-medium">Enter your email and password below </p>
      <form onSubmit={formik.handleSubmit} className="space-y-3">
      <div className="mt-7 flex flex-col gap-2">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                  className="h-[18px] w-[18px] "
                />
                Continue with GitHub
              </button>

              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-[18px] w-[18px] "
                />
                Continue with Google
              </button>
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
            to="/forgot-password"
            className="text-violet-800 font-normal "
          >
            Forgot Password
          </Link>
        </span>
      
          
      <div className="flex gap-2 ">
        <p>Don't have an account? </p>
        <Link to="/signup">
          <span className="text-violet-800 font-medium">Register </span>
        </Link>
      </div>
      </div>
    </Card>
    </div>
  );
};

export default Login;
