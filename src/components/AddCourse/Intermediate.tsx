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

import { FormikDetails } from "./Basic";

const Intermediate = ({ formik, setChange }: FormikDetails) => {
  const handleLast = () => {
    const isValid = formik.values.description && formik.values.content;

    if (isValid) {
      setChange("step-3");
    } else {
      Object.keys(formik.values).forEach((field) => {
        formik.setFieldTouched(field, true, false);
      });
    }
  };

  return (
    <div>
      <TabsContent value="step-2">
        <Card>
          <CardHeader>
            <CardTitle>About and Content</CardTitle>
            <CardDescription>
              Please Provide About and Content in this course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter description"
                value={formik.values.description}
                onChange={formik.handleChange}
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-600 text-sm  ">
                  {formik.errors.description}
                </p>
              )}

              <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Whats is inside of the course
              </label>
              <textarea
                name="content"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter content"
                onChange={formik.handleChange}
                value={formik.values.content}
              ></textarea>
              {formik.touched.content && formik.errors.content && (
                <p className="text-red-600 text-sm ">{formik.errors.content}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            <Button onClick={() => setChange("step-1")}>Back</Button>
            <Button type="button" onClick={handleLast}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Intermediate;
