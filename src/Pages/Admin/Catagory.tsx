import { usePagination } from "@/CustomHook/usePagination";
import CatagoryAdding from "@/components/Admin/CatagoryAdding";
import DeleteModal from "@/components/Admin/DeleteModal";
import PaginationPage from "@/components/PaginationPage";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";

import { useEffect, useState } from "react";
import { toast } from "sonner";

 type CatagoriesDetails = {
  name: string;
  _id: string;
  activeStatus: boolean;
};

const Catagory = () => {
  const [change, setChange] = useState({ id: "", name: "", isOpen: false, });
  const [catagories, setCatagories] = useState<CatagoriesDetails[]>([]);
  const [select, setSelect] = useState({ id: "", isOpen: false,activeStatus:true})

  const { currentPage, setCurrentPage, totalPages, setTotalPages } =  usePagination()

  const fetchCatagories = async () => {
    try {
      const { data } = await axios.get(
        `/auth/admin/catagory/?page=${currentPage}`
      );
      setCatagories(data.catagories);

      setTotalPages(data.pageCount);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };
  useEffect(() => {
    fetchCatagories();
    
},[currentPage])


  const handleEdit = (id: string, name: string) => {
    setChange({ id, name, isOpen: true });
  };

  const handleDelete = async (id: string,status:boolean) => {
    setSelect({ id: id, isOpen: true,activeStatus:status })
  };
  const handleCatagoryDelete = async (activeStatus:boolean) => {
    try {
     await axios.put(`/auth/admin/deleteCatagory/${select.id}`,{activeStatus})
      setSelect({ id: "", isOpen: false,activeStatus:true })
      fetchCatagories()

    

      toast.success("Category status changed succesfully");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };
  return (
    <>
      <div className="my-5 mx-5 flex justify-end ">
        {change && <CatagoryAdding change={change}  fetchCatagories = {fetchCatagories}   setChange={setChange} />}

        <button
          onClick={() => setChange({ id: "", name: "", isOpen: true })}
          className="bg-indigo-700 rounded-lg p-3 text-white font-medium "
        >
          + Create Category
        </button>
      </div>
      {select.isOpen && (
        <DeleteModal
          handleDelete={handleCatagoryDelete}
          setSelect={setSelect}
          select={select}
        />
      )}

      <div className="grid grid-cols-1  md:grid-cols-3 gap-2  px-4">
        {catagories.map((category, index) => (
          <Card key={category._id} className="w-full   shadow-xl">
            <CardContent className="mt-5">
              <div className="w-full items-center">
                <h1 className="capitalize text-lg font-medium ">
                  {" "}
                  {index + 1}. {category.name}
                </h1>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end space-x-3">
              <Button
                onClick={() => handleEdit(category._id, category.name)}
                variant="outline"
              >
                Edit
              </Button>
              <Button className={`${category.activeStatus === true ?"bg-red-500":"bg-green-500"}`}
                onClick={() => handleDelete(category._id,category.activeStatus)}
                variant="outline"
              >
                {category.activeStatus ?"Unlist":"List" }
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PaginationPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Catagory;
