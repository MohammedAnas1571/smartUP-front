import { isAdminLogin } from '@/Redux/Admin/adminSlice';
import { SignOut } from '@/Redux/Tutor/tutorSlice';
import { userSignOut } from '@/Redux/User/userSlice';

import axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as Yup from 'yup';

const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit:async( values) => {
      console.log(values)
         try{
          await axios.post('/auth/admin/login',values)
          toast.success("Admin Logged In Successfully")
           dispatch(isAdminLogin())
           dispatch(SignOut())
           dispatch(userSignOut())
           navigate("/admin/dashboard")

         }
          catch (err) {
            if (axios.isAxiosError(err) && err.response) {
              toast.error(err.response.data.message || "Something Went To Wrong");
            }

         }
    }
  });

  return (
    <div className="mt-10">
      <div className="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-3xl font-bold text-gray-700">Please Login</h1>
          <p className="text-gray-500">Login to access your account</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                }`}
         
              />
              <label
                htmlFor="email"
                className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 ${
                  formik.values.email ? '-translate-y-4 scale-75' : ''
                }`}
              >
                Enter Your Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>
          </div>

          <div>
            <div className="relative mt-2 w-full">
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                }`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 ${
                  formik.values.password ? '-translate-y-4 scale-75' : ''
                }`}
              >
                Enter Your Password
              </label>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>
          </div>

          <button type="submit" className="rounded-lg bg-blue-600 py-3 mt-3 w-full font-bold text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
