

import {
    Dialog,
    DialogContent,
    DialogFooter,

    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { SubscriptionValidation } from "@/validation/validation";
  import axios from "axios";
import { useFormik } from "formik";
  import { toast } from "sonner";
  import { SubscriptionDetails } from "@/Pages/Admin/Subscription";
  type AddingSubscription = {
    setChange: React.Dispatch<React.SetStateAction<boolean>>;
    change:boolean;
    setSubscription:React.Dispatch<SubscriptionDetails[]|null>

  };

const AddingSubscription = ({change,setChange,setSubscription}:AddingSubscription) => {
  
    const formik = useFormik({
        initialValues: {
          planname: "",
          billingPeriod: "week",
          price: 0,
          description: "",
        },
        validationSchema: SubscriptionValidation,
        onSubmit: async (values) => {
          try {
            
            const { data } = await axios.post(
              "/auth/admin/subscription",values
            );
            toast.success(data.status);
            setSubscription(data.subscription)
            formik.resetForm();
            setChange(false)
          } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
              toast.error(err.response.data.message || "Something Went To Wrong");
             
            }
          }
        },
      });



    return (
        <div>
          <Dialog open={change} onOpenChange={setChange}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-xl">Add Category</DialogTitle>
              </DialogHeader>
              <form  onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="planname" className="block text-sm font-medium text-gray-700">
                    Plan Name
                  </label>
                  <input
                    type="text"
                    name="planname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                  />
                   {formik.touched.planname && formik.errors.planname && (
                        <p className="text-red-600 text-sm  ">
                          {formik.errors.planname}
                        </p>
                   )}
                </div>
              
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                 Billing period
                </label>
                <select
                  name="billingPeriod"
                  onChange={formik.handleChange}
                  className="mt-1 p-2 block w-full border rounded-md"
                >
                  <option value="week">week</option>
                  <option value="month">month</option>
               
                </select>
              </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                  />
                   {formik.touched.price && formik.errors.price && (
                        <p className="text-red-600 text-sm  ">
                          {formik.errors.price}
                        </p>
                   )}
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 p-2 block w-full border rounded-md"
                  >
                  </textarea>
                  {formik.touched.description && formik.errors.description && (
                        <p className="text-red-600 text-sm  ">
                          {formik.errors.description}
                        </p>
                   )}
                </div>
                <DialogFooter>
                  <button className="bg-black p-3 rounded-md text-white" type="submit">
                    Submit
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      );
      
};



   


export default AddingSubscription