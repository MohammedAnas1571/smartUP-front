import { RootState } from "@/Redux/Store";
import { userSignOut } from "@/Redux/User/userSlice";
import { SignOut } from "@/Redux/Tutor/tutorSlice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "sonner";

export function UserNav() {
  const { currentTutor } = useSelector((state: RootState) => state.tutor);
  console.log(currentTutor);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const { data } = await axios.get("/auth/logout");
      console.log(data);
      dispatch(userSignOut());
      dispatch(SignOut());

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
        <img
          className="rounded-full h-12 w-12 cursor-pointer "
          src={`/auth/${currentTutor?.profilePhoto}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {currentTutor?.username}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {currentTutor?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
