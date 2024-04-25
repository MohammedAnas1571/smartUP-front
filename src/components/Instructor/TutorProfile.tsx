import { useState } from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

const TutorProfile = () => {
  const [change, setChange] = useState(false);
  const { currentTutor } = useSelector((state: RootState) => state.tutor);

  return (
    <div className="mx-auto flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
      <div className="mb-4 md:mr-6 md:mb-0 flex-shrink-0">
        <img
          className="h-56 rounded-lg object-cover md:w-56"
          src={`/auth/${currentTutor?.profilePhoto}`}
          alt=""
        />
      </div>
      <div className="">
        <p className="text-xl font-medium text-gray-700">
          {currentTutor?.username}
        </p>

        <p className="mb-4 text-sm font-medium text-gray-500">
          {currentTutor?.profession}
        </p>
        <p className="mb-4 text-sm font-medium text-gray-500">
          {currentTutor?.about}
        </p>

        <div className="flex space-x-2">
          {change && <EditProfile change={change} setChange={setChange} />}
          <button
            onClick={() => {
              setChange(true);
            }}
            className="my-5 rounded-sm px-5 py-3 text-center font-bold transition text-lg bg-primary text-white sm:me-auto"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
