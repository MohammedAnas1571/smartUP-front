import { adminSignOut } from "@/Redux/Admin/adminSlice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useDispatch } from "react-redux";

import { toast } from "sonner";

export function SignOut() {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const { data } = await axios.get("/auth/logout");
      console.log(data);
      dispatch(adminSignOut());

      toast.success("Logout Successfully");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Something Went To Wrong");
      }
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full h-12 w-12 cursor-pointer bg-indigo-800 ">
          {" "}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
