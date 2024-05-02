import { RootState } from "@/Redux/Store";
import { loginSuccessData } from "@/Redux/User/userSlice";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userProfile } from "@/validation/validation";
import axios from "axios";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

const EditUser = ({
  select,
  setSelect,
}: {
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    `/auth/${currentUser?.profilePhoto}`
  );
  const formik = useFormik({
    initialValues: {
      username: currentUser?.username || "",

      about: currentUser?.about || "",

      image: `/auth/${currentUser?.profilePhoto}` || "",
    },
    validationSchema: userProfile,

    onSubmit: async (values) => {
     
      try {
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("image", values.image);
        formData.append("about", values.about);

        const { data } = await axios.put("/auth/profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Profile Updated Successfully");
        console.log(data);
        dispatch(loginSuccessData(data));
        setSelect(false);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast.error(err.response.data.message || "Something Went To Wrong");
        }
      }
    },
  });
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <Dialog open={select} onOpenChange={setSelect}>
        <DialogContent className="sm:max-w-[500px]  shadow-lg ">
          <DialogHeader></DialogHeader>
          <form onSubmit={formik.handleSubmit}>
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
                {formik.errors.image && (
                  <p className="text-red-500">{formik.errors.image}</p>
                )}
              </div>

              <div>
                <Label className="text-right">Username</Label>
                <Input
                  name="username"
                  defaultValue={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.username && formik.touched.username && (
                  <p className="text-red-500">{formik.errors.username}</p>
                )}
              </div>
              <div>
                <Label className="text-right ">email</Label>

                <p>{currentUser?.email}</p>
              </div>

              <div>
                <Label htmlFor="about" className="text-right ">
                  my bio
                </Label>
                <Textarea
                  defaultValue={formik.values.about}
                  name="about"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Type about yourself"
                />
                {formik.errors.about && formik.touched.about && (
                  <p className="text-red-500">{formik.errors.about}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button className="mt-4" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditUser;
