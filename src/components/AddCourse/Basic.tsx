import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { FormikProps } from "formik";

export interface FormValues {
  title: string;
  subTitle: string;
  catagory: string;
  tags: string;
  price: string;
  level: string;
  content: string;
  description: string;
  image: string;
  preview: string;
}

export interface FormikDetails {
  formik: FormikProps<FormValues>;
  setChange: React.Dispatch<React.SetStateAction<string>>;
}
type Catagory = {
  _id: string;
  name: string;
};
const Basic = ({ formik, setChange }: FormikDetails) => {
  const [catagories, setCatagories] = useState<Catagory[]>([]);
  const fetchCatagory = async () => {
    try {
      let { data } = await axios.get("/auth/admin/catagory");
      setCatagories(data.catagories);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };
  useEffect(() => {
    fetchCatagory();
  }, []);

  const handleNext = () => {
    const isValid =
      formik.values.catagory &&
      formik.values.title &&
      formik.values.subTitle &&
      formik.values.price &&
      formik.values.tags;
    if (isValid) {
      setChange("step-2");
    } else {
      Object.keys(formik.values).forEach((field) => {
        formik.setFieldTouched(field, true, false);
      });
    }
  };

  return (
    <>
      <TabsContent value="step-1">
        <Card>
          <CardHeader>
            <CardTitle>Basic Informations</CardTitle>
            <CardDescription>
              Please provide basic informations about courses
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
                  value={formik.values.title}
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
                <select
                  name="catagory"
                  value={formik.values.catagory}
                  onChange={(e) => {
                    const catagoryId = e.target.value;
                    formik.setFieldValue("catagory", catagoryId);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select catagory</option>
                  {catagories.map((catagory) => (
                    <option key={catagory._id} value={catagory._id}>
                      {catagory.name}
                    </option>
                  ))}
                </select>

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
                  value={formik.values.price}
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
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};

export default Basic;
