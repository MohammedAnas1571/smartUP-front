import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { UserNav } from "./LogOut";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-16">
        <nav
          className={cn("flex items-center space-x-4  lg:space-x-6", className)}
        >
          <Link
            to="/instructor/dashboard"
            className="text-sm font-medium  transition-colors focus:text-xl focus:font-bold focus: text-pretty outline-none"
          >
            Overview
          </Link>
          <Link
            to="/instructor/courses"
            className="text-sm font-medium  transition-colors  focus:text-xl focus:font-bold focus:outline-none"
          >
            My Courses
          </Link>
          <Link
            to="/instructor/chat"
            className="text-sm font-medium  transition-colors  focus:text-xl focus:font-bold focus:outline-none"
          >
           Chat
          </Link>
          <Link
            to="/instructor/subscription"
            className="text-sm font-medium  transition-colors  focus:text-xl focus:font-bold focus:outline-none"
          >
           Subscription
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <div>
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
          </div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}
