
import {
  signUpStart,
  signUpFailure,
  signUpSuccess,
} from "../../Redux/User/userSlics";
import { signUpSchema } from "@/validation/validation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

import { toast } from "sonner";

const Register = () => {
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
      console.log(values);
      try {
        dispatch(signUpStart());
        const { data } = await axios.post(`/auth/tutor/signUp`, values);
        dispatch(signUpSuccess(data))
        navigate("/otp")
      } catch (err: any) {
        if (err) {
          toast(err.response.data.message);
          dispatch(signUpFailure());
        }
      }
    },
  });
  return (
    <div className="shadow-lg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
      <div className="relative bg-white rounded-lg shadow">
       

        <div className="p-5">
          <h3 className="text-2xl mb-0.5 font-medium"></h3>
          <p className="mb-4 text-sm font-normal text-gray-800"></p>

          <div className="text-center">
            <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
              Login to your account
            </p>
            <p className="mt-2 text-sm leading-4 text-slate-600">
              You must be logged in to perform this action.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="h-[18px] w-[18px] "
              />
              Continue with GitHub
            </button>

            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-[18px] w-[18px] "
              />
              Continue with Google
            </button>
          </div>

          <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          <form onSubmit={formik.handleSubmit} className="w-full">
          <label htmlFor="name" className="sr-only">
              Username
            </label>
            <input
              name="username"
              type="text"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
              placeholder="Enter Username"
            />
            {formik.errors.username && formik.touched.username && (
              <div className="text-red-500">{formik.errors.username}</div>
            )}
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
              placeholder="Email Address"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
              placeholder="Password"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
             <label  className="sr-only">
              Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
              placeholder="Password"
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <div className="text-red-500">{formik.errors.confirmPassword}</div>
            )}
           
            <button
              type="submit"
              className="inline-flex w-full items-center mt-5 justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2"
            >
              {loading ? <span className="loader "></span> : "Continue"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
          Already Have an Account ? {" "}
            <Link to="/instructor/signIn" className="font-medium text-[#4285f4]">
             Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
