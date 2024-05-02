import { RxDashboard } from "react-icons/rx";
import { FcBullish } from "react-icons/fc";
import { FaBookOpen, FaUser } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import {  NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="bg-black/80  w-60 h-[1200px]  p-3 text-white">
      <div className="flex items-center gap-2 px-5 py-5">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-xl">SmartUp</span>
      </div>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-700":""} to="/admin/dashboard">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2 transition-colors rounded-xl">
        <RxDashboard fontSize={24} />
        <span className="text-neutral-100 text-xl">DashBoard</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-700":""} to="/admin/client">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2 transition-colors rounded-xl ">
        <FaUser fontSize={24} />
        <span className="text-neutral-100 text-xl">Users</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-700":""} to="/admin/tutor">
       
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2 transition-colors rounded-xl">
        <IoAccessibility fontSize={24} />
        <span className="text-neutral-100 text-xl">Instructors</span>
      </div>
      </NavLink>
      <NavLink  className={({isActive})=> isActive?"*:bg-slate-700":""} to="/admin/catagory">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2 transition-colors rounded-xl">
      <TbCategory2 fontSize={24}/>
        <span className="text-neutral-100 text-xl">Catagory</span>
      </div>
      </NavLink>
      <NavLink className={({isActive})=> isActive?"*:bg-slate-700":""} to="/admin/courses" >
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2 transition-colors rounded-xl cursor-pointer">
      
      <FaBookOpen fontSize={24} />
        <span className="text-neutral-100 text-xl">Courses</span>
      </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
