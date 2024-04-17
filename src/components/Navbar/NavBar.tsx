import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { UserNav } from "../dashboard/UserNav";

import { Button } from "../ui/button";
import { CiSearch,  } from "react-icons/ci";
import { FcBusinessman, FcHome,FcShop  } from "react-icons/fc";
import { FaAlignJustify } from "react-icons/fa";

export const NavBar = () => {

  const {currentUser,isUserSign} = useSelector((state:RootState)=>state.user)
 
  return (
    <header className="shadow-md" >
  <div className="max-w-[1640px] p-4 mx-auto">
    <div className="flex justify-between">
    <div className="flex items-center gap-4">
      <h1 className="text-3xl font-semibold font-serif whitespace-nowrap">Smart Up</h1>
      <div className=" items-center ml-6 border-2 focus-within:ring focus-within:ring-blue-800 rounded-lg hidden sm:flex flex-wrap">
        <input
          className="px-4 py-2 border-none focus:outline-none w-64"
          type="text"
          placeholder="Search Courses"
        />
        <button className="p-2 focus:outline-none focus:ring focus:ring-blue-800">
          <CiSearch className="h-6 w-6 " />
        </button>
  
      </div>
      {/* <div>
      <FaAlignJustify/>
      </div> */}
    </div>
    <ul className="items-center gap-4  hidden sm:flex flex-wrap">
  <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
    <span ><FcHome/></span>
    <span >Home</span>
  </li>
  <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
    <span  ><FcShop/></span>
    <span >Courses</span>
  </li>
  {isUserSign ? <li className="  p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg"> <span><img className="w-4 h-4" src="/wave.png"/></span>{currentUser?.username} </li>:
      
      <Link to="/instructor/signin">
       <li className=" p-2 cursor-pointer flex items-center  hover:bg-slate-200 rounded-lg">
    <span ><FcBusinessman /></span>
    <span >Teach On with Us</span>
  </li>
    </Link>
  }
  
  {currentUser&& currentUser.role==="User"? <UserNav/> :
      <Link to="/signin">
        <Button className="px-5" >
          Login
          </Button>
        </Link> }
     
</ul>
    </div>
   
  </div>
</header>

  )
}





