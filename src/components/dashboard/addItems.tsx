import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFormik } from "formik";
import { addingSchema } from "@/validation/validation";
import axios from "axios";
import { toast } from "sonner";

export function AddItem({
  setSubmit,
  submit,
}: {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  submit: boolean;
}) {
  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      catagory: "",
      tags: "",
      price: "",
      level: "Beginners",
      description: "",
      image: "",
    },
    validationSchema: addingSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("subTitle", values.subTitle);
        formData.append("catagory", values.catagory);
        formData.append("tags", values.tags);
        formData.append("price", values.price);
        formData.append("level", values.level);
        formData.append("description", values.description);
        formData.append("image", values.image);
        
        const { data } = await axios.post("/auth/tutor/course", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        setSubmit(false)
        toast.success("Course Created Successfully")

      } catch (err: any) {
        if (err) {
          toast(err.response.data.message);
        }
      }
    },
  });

  return (
    <Dialog open={submit} onOpenChange={setSubmit}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-red-600 text-sm  ">{formik.errors.title}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                SubTitle
              </label>
              <input
                type="text"
                name="subTitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter subtitle"
                value={formik.values.subTitle}
                onChange={formik.handleChange}
              />
              {formik.touched.subTitle && formik.errors.subTitle && (
                <p className="text-red-600 text-sm  ">
                  {formik.errors.subTitle}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Catagory
              </label>
              <input
                type="text"
                name="catagory"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Placeholder"
                value={formik.values.catagory}
                onChange={formik.handleChange}
              />
              {formik.touched.catagory && formik.errors.catagory && (
                <p className="text-red-600 text-sm  ">
                  {formik.errors.catagory}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Level
              </label>
              <select
                name="level"
                value={formik.values.level}
                onChange={formik.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Beginners">Beginners</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the tags"
                value={formik.values.tags}
                onChange={formik.handleChange}
              />
              {formik.touched.tags && formik.errors.tags && (
                <p className="text-red-600 text-sm  ">{formik.errors.tags}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter amount"
                value={formik.values.price === null ? "" : formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-red-600 text-sm  ">{formik.errors.price}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter descriptio"
              value={formik.values.description}
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-600 text-sm  ">
                {formik.errors.description}
              </p>
            )}
          </div>
          <input
            name="image"
            className="block mt-5 p-2.5  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue("image", e.currentTarget.files?.[0]);
            }}
          />
          {formik.touched.image && formik.errors.image && (
            <p className="text-red-600 text-sm">{formik.errors.image}</p>
          )}

          <button
            type="submit"
            className="text-white hover:opacity-90 bg-violet-700 mt-2 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            + Create
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
