
import { TabsContent, } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormikContext } from "formik";
export interface FormikDetails {
    formik:any;
    setChange: React.Dispatch<React.SetStateAction<string>>;
}
const Basic = ({formik,setChange}:FormikDetails) => {
    
  return (
    <>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  value = {formik.values.title}
                  onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title && (
                  <p className="text-red-600 text-sm ">{formik.errors.title}</p>
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
                  value = {formik.values.tags}
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
                  value = {formik.values.price}
                  onChange={formik.handleChange}
                />
                {formik.touched.price && formik.errors.price && (
                  <p className="text-red-600 text-sm  ">
                    {formik.errors.price}
                  </p>
                )}
              </div>
             
            </div>
          </CardContent>
          <CardFooter className="flex justify-end ">
          <Button onClick={() => setChange("password")} >
          Next
        </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      
    </>
  );
};

export default Basic;
