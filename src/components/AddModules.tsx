import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { moduleSchema } from "@/validation/validation";
import axios, { AxiosProgressEvent } from "axios";
import { useFormik } from "formik";
import { toast } from "sonner";

export function AddModules({
  setChange,
  change,
  courseId
}: {
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  change: boolean;courseId:string
}) {
   
  const formik = useFormik({
    initialValues: {
      modules: "",
      order: "",
      video: "", 
    },
    validationSchema: moduleSchema , 

    onSubmit: async (values) => {
        
      try {
        const formData = new FormData();
        formData.append("modules", values.modules);
        formData.append("order", values.order);
        formData.append("video", values.video);
        formData.append("id",courseId) 
      
        const options = {
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const { loaded, total } = progressEvent;
            let percentage = Math.floor((loaded * 100) / total!);
            console.log(`${loaded} ${total} | ${percentage}% `);
          },
        };

        await axios.post("/auth/tutor/addModule", formData, options);
        setChange(false);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          toast.error(err.response.data.message || "Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      }
    },
  });

  return (
    <Dialog open={change} onOpenChange={(e) => setChange(e)}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Modules</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Module Title
            </label>
            <input
              type="text"
              name="modules"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title"
              onChange={formik.handleChange}
              
            />
            {formik.errors.modules && formik.touched.modules && (
              <p className="text-red-500">{formik.errors.modules}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Module Order
            </label>
            <input
              type="text"
              name="order"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Order"
              onChange={formik.handleChange}
             
            />
            {formik.errors.order && formik.touched.order && (
              <p className="text-red-500">{formik.errors.order}</p>
            )}
          </div>
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            Module video
          </label>
          <input
            name="video"
            className="block mt-5 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            accept="video/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue("video", e.currentTarget.files?.[0]);
            }}
          />
          {formik.errors.video && formik.touched.video && (
            <p className="text-red-500">{formik.errors.video}</p>
          )}
          <Button className="mt-2" type="submit">
            + Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
