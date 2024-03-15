
import * as Yup from "yup"; 
import z from  'zod';

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; 

 export const signUpSchema = Yup.object().shape({
    username: Yup.string().min(4, "Username must be at least 4 characters").required(),
    email: Yup.string().email().matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Invalid email address").required(),
    password: Yup.string().matches(passwordPattern,"password must be at least 8 characters long , at least one uppercase letter, one lowercase letter, one special character, and one number").required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm password is required'),
  })

  export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one special character, and one number"
      )
      .required("Password is required"),
  });
  

   
 export const FormSchema = z.object({
  otp: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
})

export const verificationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('please enter your verified email'), 
});
export const verificationPassword = Yup.object({
 password: Yup.string()
.matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one special character, and one number"
)
.required("Password is required"),
});
