import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { UserNav } from "../Instructor/LogOut";

import { Button } from "../ui/button";

import { FcBusinessman, FcHome, FcShop } from "react-icons/fc";
import { FaAlignJustify } from "react-icons/fa";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  const { currentUser, isUserSign } = useSelector(
    (state: RootState) => state.user
  );
  console.log(currentUser?.username);
  console.log(isUserSign);
  return (
    <header className="shadow-md  w-full  bg-white">
      <div className="max-w-[1640px] p-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-16">
            <h1 className="text-3xl font-semibold font-serif whitespace-nowrap">
              Smart Up
            </h1>
            <div className=" flex flex-col gap-2">
            <SearchBar/>
           </div>
          </div>
          <ul className="items-center gap-4  hidden sm:flex flex-wrap">
            <Link to="/">
              <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
                <span>
                  <FcHome />
                </span>
                <span>Home</span>
              </li>
            </Link>
            <Link to= "/courses">
            <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
              <span>
                <FcShop />
              </span>
              <span>Courses</span>
            </li>
            </Link>
            {currentUser?.username && isUserSign ? (
              <li className="  p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
                {" "}
                <span>
                  <img className="w-4 h-4" src="/wave.png" />
                </span>
                {currentUser?.username}
              </li>
            ) : (
              <Link to="/instructor/signin">
                <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
                  <span>
                    <FcBusinessman />
                  </span>
                  <span>Teach On with Us</span>
                </li>
              </Link>
            )}

            {currentUser && currentUser.role === "User" ? (
              <UserNav />
            ) : (
              <Link to="/signin">
                <Button className="px-5">Login</Button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
