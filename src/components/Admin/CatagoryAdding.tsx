import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type CatagorySubmit = {
  setChange: React.Dispatch<React.SetStateAction<{id:string;name:string;isOpen:boolean}>>;
  change: { id: string; name: string; isOpen: boolean };
};

const CatagoryAdding = ({ change, setChange }: CatagorySubmit) => {
  const [catagory, setCatagory] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");

  useEffect(()=>{
    if(change.id){
      setCatagory(change.name);
    }
  },[])

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    if (!catagory) {
      setValidationError("Please add fields ");
      return;
    }

    try {
      if (!change.id) {
        await axios.post("/auth/admin/catagory", { catagory });
        toast.success("Catagory added");
        setChange({id: "", name: "", isOpen: false});
      }else{
       await axios.put("/auth/admin/editCatagory",{id:change.id, catagory})
       toast.success("Catagory Edited")
       setChange({id: "", name: "", isOpen: false});
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };

  return (
    <Dialog open={change.isOpen} onOpenChange={()=>setChange({name:"",id:"",isOpen: false})}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl ">Add Catagory</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 py-4">
            <div className="">
              <Label
                htmlFor="name"
                className="text-right 
          text-lg"
              >
                Name
              </Label>
            </div>
            <Input className="capitalize"
              defaultValue={change.name}
              onChange={(e) => setCatagory(e.target.value)}
            />

            {validationError && (
              <p className="text-red-500 text-md">{validationError}</p>
            )}
          </div>
          <DialogFooter>
            <button
              className="bg-black p-3 rounded-md text-white"
              type="submit"
            >
              Submit
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CatagoryAdding;
