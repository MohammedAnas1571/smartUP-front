import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import axios from "axios";
import { isLoading, loginFailed, loginSuccess } from "@/Redux/User/userSlice";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { verificationPassword } from "@/validation/validation";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

const Reset = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const { id, token } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: verificationPassword,
    onSubmit: async (values) => {
      try {
        dispatch(isLoading());

        await axios.post(`/auth/tutor/change_Password/${id}/${token}`, values);
        dispatch(loginSuccess());
        navigate("/instructor/signin");
      } catch (err: any) {
        if (err) {
          toast(err.response.data.message);
          dispatch(loginFailed());
        }
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-2xl p-12">
        <form onSubmit={formik.handleSubmit} className="text-center space-y-6">
          <div className="flex justify-center  ">
            <img
              className="w-16"
              src="/icons8-confirm-50.png"
              alt="email icon"
            />
          </div>
          <h1 className="text-4xl flex justify-center font-mono font-semibold mb-3">
            Confirm Password
          </h1>
          <p className="mb-5 font-medium font-serif">
            Please enter your new password
          </p>
          <Input
            className="bg-slate-100"
            type="password"
            placeholder=" Enter your password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-600 text-sm  ">
              {formik.errors.password}
            </div>
          )}
          <Button type="submit" className="p-6 w-80 text-lg">
            {loading ? <span className="loader "></span> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
