import { RxDashboard } from "react-icons/rx";
import { FcBullish } from "react-icons/fc";
import { FaBookOpen, FaUser } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="bg-neutral-900  w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-5 py-5">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-xl">SmartUp</span>
      </div>
      <Link to="/admin/dashboard">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2">
        <RxDashboard fontSize={24} />
        <span className="text-neutral-100 text-xl">DashBoard</span>
      </div>
      </Link>
      <Link to="/admin/client">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2">
        <FaUser fontSize={24} />
        <span className="text-neutral-100 text-xl">Users</span>
      </div>
      </Link>
      <Link to="/admin/tutor">
       
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2">
        <IoAccessibility fontSize={24} />
        <span className="text-neutral-100 text-xl">Instructors</span>
      </div>
      </Link>
      <Link to="/admin/catagory">
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2">
      <TbCategory2 fontSize={24}/>
        <span className="text-neutral-100 text-xl">Catagory</span>
      </div>
      </Link>
      <div className="text-white flex items-center gap-2 px-5 mt-5 hover:bg-slate-700 p-2">
      
      <FaBookOpen fontSize={24} />
        <span className="text-neutral-100 text-xl">Courses</span>
      </div>
    </div>
  );
};

export default SideBar;
