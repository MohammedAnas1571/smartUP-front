import { RxDashboard } from "react-icons/rx";
import { FcBullish } from "react-icons/fc";
import { FaBookOpen, FaUser } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";

import { TbCategory2 } from "react-icons/tb";
import {  NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="bg-white border shadow-md  w-60 h-[1200px]  p-3 text-black">
      <div className="flex items-center gap-2 px-5 py-5">
        <FcBullish fontSize={20} />
        <span className="text-xl">SmartUp</span>
      </div>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/dashboard">
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200 p-2 transition-colors rounded-xl ">
        <RxDashboard fontSize={20} />
        <span className="">DashBoard</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/client">
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200  p-2 transition-colors rounded-xl ">
        <FaUser fontSize={20} />
        <span >Users</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/tutor">
       
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200 p-2 transition-colors rounded-xl ">
        <IoAccessibility fontSize={20} />
        <span >Instructors</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/catagory">
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200 p-2 transition-colors rounded-xl ">
      <TbCategory2 fontSize={20}/>
        <span>Catagory</span>
      </div>
      </NavLink>
      <NavLink className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/courses" >
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200 p-2 transition-colors rounded-xl ">
      
      <FaBookOpen fontSize={20} />
        <span >Courses</span>
      </div>
      </NavLink>

      <NavLink className={({isActive})=> isActive?"*:bg-slate-200":""} to="/admin/subscription" >
      <div className="text-black flex items-center gap-2 px-5 mt-5 hover:bg-slate-200 p-2 transition-colors rounded-xl ">
      
      <MdSubscriptions  fontSize={20} />
        <span >Subscription</span>
      </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
