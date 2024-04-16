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
import { useState } from "react";
import { AddModules } from "../AddModules";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";


interface EndProps {
    formik: any;
     setChange:React.Dispatch<React.SetStateAction<string>>;
    fileSubmit: (formData: FormData) => void;
    formDataArray: FormData[];
    setFormDataArray: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const End = ({
    formik,
    setChange,
    fileSubmit,
    formDataArray,
    setFormDataArray,
}: EndProps) => {
    const { loading } = useSelector((state: RootState) => state.user);
    const [submit, setSubmit] = useState<boolean>(false);
    
    const handleClick = () => {
        setSubmit(true);
    };
    const handleDelete = (index: number) => {
        formDataArray.splice(index, 1);
        setFormDataArray([...formDataArray]);
    };

    return (
        <TabsContent value="full">
            <Card>
                <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                        Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-6 mb-6 md:flex-row md:gap-6 md:items-center">
                        <div className="flex flex-col">
                            <label
                                htmlFor="image"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Image
                            </label>
                            <input
                                id="image"
                                name="image"
                                className="p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file"
                                accept="image/*"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    formik.setFieldValue("image", e.currentTarget.files?.[0]);
                                }}
                            />
                            {formik.touched.image && formik.errors.image && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.image}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="preview"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Preview video
                            </label>
                            <input
                                id="preview"
                                name="preview"
                                className="p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file"
                                accept="video/*"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    formik.setFieldValue("preview", e.currentTarget.files?.[0]);
                                }}
                            />
                            {formik.touched.preview && formik.errors.preview && (
                                <p className="text-red-600 text-sm mt-1">
                                    {formik.errors.preview}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* <button
                        onClick={handleClick}
                        type="button"
                        className="text-white hover:opacity-90 bg-violet-700 mt-2 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add Modules
                    </button>
                    {submit && (
                        <AddModules
                            submit={submit}
                            setSubmit={setSubmit}
                            onSubmit={fileSubmit}
                        />
                    )}
                    <div className="mt-6">
                        {formDataArray.map((item, index) => (
                            <Card
                                key={index}
                                className="p-2 mb-2 flex items-center justify-between"
                            >
                                <div className="text-lg font-medium">
                                    {index + 1}. {item.get("modules")}
                                </div>
                                <FaTrash
                                    onClick={() => handleDelete(index)}
                                    className="cursor-pointer text-red-600"
                                />
                            </Card>
                        ))} */}
                    {/* </div> */}
                </CardContent>
                        
                <CardFooter className="flex justify-end gap-3">
                    <Button onClick={() => setChange("password")}>
                    Back
              </Button>
                    <Button type="submit">+Create</Button>
            
                </CardFooter>
            </Card>
        </TabsContent>
    );
};

export default End;