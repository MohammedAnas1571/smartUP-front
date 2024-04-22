
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
 
  DialogFooter,
  DialogHeader,
 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import {  useRef, useState } from "react"
import { TutorDetails } from "@/Pages/Instructor/DashBoard"
import { useFormik } from "formik"
import { ProfileSchema } from "@/validation/validation"
import axios from "axios"
import { toast } from "sonner"
const EditProfile = ({change,setChange,tutor,setTutor}:{change:boolean,setChange:React.Dispatch<React.SetStateAction<boolean>>,tutor:TutorDetails,setTutor:React.Dispatch<React.SetStateAction<TutorDetails|undefined>>}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [imagePreview, setImagePreview] = useState<string | undefined>(tutor.profilePhoto)
    const formik = useFormik({
      initialValues: {
        username: tutor.username || "",
        email: tutor.email || "",
        about: tutor.about || "",
        profession:tutor.profession||"" ,
        image :tutor.profilePhoto || "",
  
      },
      validationSchema: ProfileSchema,
     
      onSubmit: async (values) => {
        try {
          const formData = new FormData()
          formData.append('username', values.username);
          formData.append('email', values.email);
          formData.append('image', values.image);
          formData.append('about', values.about);
          formData.append('profession', values.profession)
          const {data} =   await axios.put("/auth/tutor/profile",formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
            })
            toast.success("Profile Updated Successfully")
            console.log(data)
            setChange(false)
            setTutor(data)
          
        }  catch (err) {
          if (axios.isAxiosError(err)&&err.response) {
            toast.error(err.response.data.message||"Something Went To Wrong");
        }
      }
    }
    })
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (file) {
        formik.setFieldValue("image", file)
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string); 
        };
        reader.readAsDataURL(file)
      }
    };
  
    
   
  return (
    <div>
  <Dialog open={change} onOpenChange={setChange}  >
      
  <DialogContent className="sm:max-w-[550px]  shadow-lg ">

        <DialogHeader>
          
        </DialogHeader>
        <form  onSubmit={formik.handleSubmit}>
        <div className="grid gap-4 ">
            <div className="flex flex-col items-center ">

            <input
          type="file"
          ref={inputRef}
          hidden
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
       
        <img
        src={imagePreview}
           alt="Profile Picture"
             className="h-36 w-36 self-center cursor-pointer rounded-full object-cover  "
             onClick={() => inputRef.current && inputRef.current.click()}
                 />
                   {formik.errors.image &&  (
                <p className="text-red-500">{formik.errors.image}</p>
              )}
            </div>
            
          
          <div >
            <Label className="text-right">
            Username
            </Label>
            <Input name="username" defaultValue={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange}  />
            {formik.errors.username && formik.touched.username && (
                <p className="text-red-500">{formik.errors.username}</p>
              )}
          </div>
          <div >
            <Label  className="text-right ">
             email
            </Label>
            <Input name="email" defaultValue={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
            {formik.errors.email && formik.touched.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
          </div>
          <div >
            <Label htmlFor="qualification"  className="text-right">
              Profession
            </Label>
            <Input name="profession" onBlur={formik.handleBlur} defaultValue={formik.values.profession} placeholder="Enter Your Profession" onChange={formik.handleChange}  />
            {formik.errors.profession && formik.touched.profession && (
                <p className="text-red-500">{formik.errors.profession}</p>
              )}
          </div>
          <div>
          <Label htmlFor="username" className="text-right ">
              Tell about  yourself in a few words.
            </Label>
          <Textarea defaultValue={formik.values.about} name="about" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Type about yourself" />
          {formik.errors.about && formik.touched.about && (
                <p className="text-red-500">{formik.errors.about}</p>
              )}
          </div>
        </div>
        <DialogFooter>
          <Button className="mt-4" type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
</div>
)
}

export default EditProfile






 