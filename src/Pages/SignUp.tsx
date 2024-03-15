import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  signUpStart,
  signUpFailure,
  signUpSuccess,
} from "../Redux/User/userSlics";
import { signUpSchema } from "@/validation/validation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import "../App.css";
import { toast } from "sonner";

const SignUp = () => {
  const URL = "http://localhost:3000";
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values)
      try {
        dispatch(signUpStart());
        const{data} = await axios.post(`${URL}/signUp`, values);
        dispatch(signUpSuccess(data));

        navigate("/otp");
      } catch (err: any) {
        if (err) {
          toast(err.response.data.message);
        dispatch(signUpFailure())
       }
      }
    },
  });
  return (
    <div className=" bg-slate-200 h-screen flex justify-center items-center ">
      <Card className="w-[400px] p-5 shadow-xl">
        <h1 className="text-3xl  font-semibold  mb-2">Create an account</h1>
        <p className="mb-2 font-medium ">
          Enter your details to create your account
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div className="flex  justify-between mt-5 ">
            <Button className="w-40 ">
              <img
                className="w-5 mr-2 "
                src="icons8-google-30 (1).png"
                alt=""
              />
              Google
            </Button>
            <Button className="w-40">
              <img
                className="w-5 mr-2 "
                src="icons8-facebook-f-24.png"
                alt=""
              />
              facebook
            </Button>
          </div>

          <div className="flex  items-center gap-2 pt-3 text-slate-700">
            <div className="h-px w-full bg-slate-300"></div>
            OR
            <div className="h-px w-full bg-slate-300"></div>
          </div>
          <div>
            <Input
              type="text"
              placeholder=" Enter Username"
              name="username"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
            />

            {formik.touched.username && formik.errors.username && (
              <div className="text-red-600 text-sm  ">
                {formik.errors.username}
              </div>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder=" Enter Email"
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-sm  ">
                {formik.errors.email}
              </div>
            )}
          </div>
          <Input
            type="password"
            placeholder=" Enter Password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600 text-sm  ">
              {formik.errors.password}
            </div>
          )}
          <div>
            <Input
              type="password"
              placeholder=" Confirm Password"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-600 text-sm  ">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <Button type="submit" className="w-full">
            {loading ? <span className="loader "></span> : "Create account"}
          </Button>
        </form>

        <div className="flex gap-2 mt-2 ">
          <p>Already have an account ? </p>
          <Link to="/login">
            <span className="text-violet-800 font-medium">Sign in </span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
