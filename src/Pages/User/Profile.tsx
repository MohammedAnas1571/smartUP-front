import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

import { useState } from "react";

import EditUser from "@/components/Profile/EditUser";

const Profile = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [select, setSelect] = useState(false);

  return (
    <div>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="flex flex-col items-center gap-5">
              <div className="w-52  image overflow-hidden">
                <img
                  className="  rounded-full mx-auto"
                  src={`/auth/${currentUser?.profilePhoto}`}
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl flex justify-center py-3 my-1">
                {currentUser?.username}
              </h1>
              {select && <EditUser select={select} setSelect={setSelect} />}
              <button
                onClick={() => setSelect(true)}
                className=" text-gray-600 font-semibold w-full hover:bg-transparent hover:text-gray-700 hover:shadow py-2 px-3 mt-3 rounded shadow-sm"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64 flex">
            <div className="bg-white p-3 shadow-sm rounded-sm w-full">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> Name</div>
                    <div className="px-4 py-2">{currentUser?.username}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <p className="text-blue-800">{currentUser?.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">{currentUser?.about}</div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
