import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  isLoading,
  loginSuccessData,
  loginFailed,
} from "../../Redux/User/userSlice";
import { signUpSchema } from "@/validation/validation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import "../../App.css";
import { toast } from "sonner";

const SignUp = () => {
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
      try {
        dispatch(isLoading());
        const { data } = await axios.post("/auth/signUp", values);
        dispatch(loginSuccessData(data.user));
        navigate("/otp");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast.error(err.response.data.message || "Something Went To Wrong");
          dispatch(loginFailed());
        }
      }
    },
  });
  return (
    <div className="h-screen flex justify-center items-center ">
      <Card className="w-[400px] p-5 shadow-xl">
        <h1 className="text-3xl  font-semibold  mb-2">Create an account</h1>
        <p className="mb-2 font-medium ">
          Enter your details to create your account
        </p>
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
          <Link to="/signin">
            <span className="text-violet-800 font-medium">Sign in </span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
