import { RootState } from "@/Redux/Store";

  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useSelector } from "react-redux"
  
  export function UserNav() {
    const {currentUser} = useSelector((state: RootState) => state.user);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <img className="rounded "src={currentUser?.profilePhoto}/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{currentUser?.username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {currentUser?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
        
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
         
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }