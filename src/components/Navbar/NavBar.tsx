import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { UserNav } from "../Instructor/LogOut";
import { Button } from "../ui/button";
import { FcBusinessman, FcHome, FcShop } from "react-icons/fc";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  const { currentUser, isUserSign } = useSelector(
    (state: RootState) => state.user
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow-md w-full bg-white dark:bg-gray-800">
      <div className="max-w-[1640px] p-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-semibold font-serif whitespace-nowrap dark:text-white">
              Smart Up
            </h1>
            <div className="sm:hidden flex items-center">
              {/* Menu Button for Mobile */}
              <button
                className="text-gray-600 dark:text-white focus:outline-none focus:text-gray-900"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-2 w-full sm:w-auto">
            <SearchBar />
          </div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex gap-4 items-center flex-col sm:flex-row`}
          >
            <Link to="/">
              <li className="p-2 cursor-pointer flex items-center hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg">
                <FcHome className="mr-1" />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/courses">
              <li className="p-2 cursor-pointer flex items-center hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg">
                <FcShop className="mr-1" />
                <span>Courses</span>
              </li>
            </Link>
            {currentUser?.username && isUserSign ? (
              <li className="p-2 cursor-pointer flex items-center hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg whitespace-nowrap">
                <img className="w-4 h-4 mr-1" src="/wave.png" alt="wave" />
                {currentUser?.username}
              </li>
            ) : (
              <Link to="/instructor/signin">
                <li className="p-2 cursor-pointer flex items-center hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg whitespace-nowrap">
                  <FcBusinessman className="mr-1" />
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
