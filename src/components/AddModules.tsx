import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useFormik } from "formik";



export function AddModules({setSubmit,submit,onSubmit}: {setSubmit: React.Dispatch<React.SetStateAction<boolean>>; submit: boolean;onSubmit:(formData:FormData)=>void }) {
    const formik = useFormik({
        initialValues: {
            modules:"",
            order: "",
            video:"" 
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("modules", values.modules);
            formData.append("order", values.order);
            formData.append("video", values.video);
            onSubmit(formData);
            setSubmit(false); 
        }
    });

    return (
        <Dialog open={submit} onOpenChange={(e)=>setSubmit(e)}>
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
                    <Button className="mt-2"type="submit">Save changes</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
