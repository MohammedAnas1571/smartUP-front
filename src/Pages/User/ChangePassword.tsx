import { useFormik } from "formik";
import { changingPassword } from "@/validation/validation";
import axios from "axios";
import handleApiError from "@/Error Handler/ApiErrorHandler";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: changingPassword,
    onSubmit:async(values)  => {
       try{
          await axios.post("/auth/change-password",values)
          toast.success("password changed successfully")
          navigate("/profile")
       }
       catch(err){
        handleApiError(err)
       }
    }
  });

  return (
    <div>
      <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div className="bg-blue-800 px-10 py-10 text-center text-white">
          <p className="font-serif text-2xl font-semibold tracking-wider">Change your Password</p>
          <p className="text-center text-blue-100">Please Enter Valid Details</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4 px-8 py-10">
            <label className="block" htmlFor="oldPassword">
              <p className="text-gray-600">Old Password</p>
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oldPassword}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                placeholder="Enter your old password"
              />
              {formik.touched.oldPassword && formik.errors.oldPassword ? (
                <div className="text-red-600">{formik.errors.oldPassword}</div>
              ) : null}
            </label>
            <label className="block" htmlFor="newPassword">
              <p className="text-gray-600">New Password</p>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                placeholder="Enter your new password"
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-red-600">{formik.errors.newPassword}</div>
              ) : null}
            </label>
            <label className="block" htmlFor="confirmPassword">
              <p className="text-gray-600">Confirm Password</p>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                placeholder="Confirm your password"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-600">{formik.errors.confirmPassword}</div>
              ) : null}
            </label>
            <button type="submit" className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

