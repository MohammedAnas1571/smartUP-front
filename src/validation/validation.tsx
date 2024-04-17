
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
export const addingSchema = Yup.object().shape({
  title: Yup.string().min(3, "Minimum 6 characters are required.").required("Title is required"),
  subTitle: Yup.string().min(6, "Minimum 10 characters are required.").required("Subtitle is required"),
  catagory: Yup.string().required("Category is required"),
  tags: Yup.string().required("Tags is required"),

  price: Yup.number().typeError("Price should be a number").required("Price is required"),
  content:Yup.string().min(20, "Minimum 20 letters are required").required("Description is required"),
  description: Yup.string().min(20, "Minimum 20 letters are required").required("Description is required"),
  image: Yup.mixed().required("File is required").test(
    "fileType",
    "Unsupported File Format",
    (value:any) => {
      if (!value) {
        return true;
      }

      const supportedFormats = ["image/jpeg", "image/png"];
      return supportedFormats.includes(value.type);
    }
  ),
  preview: Yup.mixed().test(
    "fileType",
    "Unsupported File Format",
    (value: any) => {
        if (!value) {
            return true; 
        }

        const supportedFormats = ["video/mp4"]; 
        return supportedFormats.includes(value.type);
    }
).test(
    "fileSize",
    "File size exceeds the limit",
    (value:any) => {
        if (!value) {
            return true;
        }

        const maxSize = 150 * 1024 * 1024; 
        return value.size <= maxSize;
    }
).required("File is required"),
});

export const moduleSchema =Yup.object().shape({

  modules: Yup.string().min(6, "Minimum 6 characters are required.").required("Title is required"),
  order: Yup.number().typeError("Order must be number").required("Order is required"),
  video:Yup.mixed().test(
    "fileType",
    "Unsupported File Format",
    (value: any) => {
        if (!value) {
            return true; 
        }

        const supportedFormats = ["video/mp4"]; 
        return supportedFormats.includes(value.type);
    }
).test(
    "fileSize",
    "File size exceeds the limit",
    (value:any) => {
        if (!value) {
            return true;
        }

        const maxSize = 150 * 1024 * 1024; 
        return value.size <= maxSize;
    }
).required("File is required"),
}
)


 




