import { useState } from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import EditEmail from "./EditEmail";

const TutorProfile = () => {
  const [change, setChange] = useState(false);
  const [modal, setModal] = useState(false);
  const { currentTutor } = useSelector((state: RootState) => state.tutor);

  return (
    <div className="mx-auto flex max-w-xs flex-col items-center  text-center md:max-w-lg md:flex-row md:items-start md:text-left">
      <div className="mb-4 md:mr-6 md:mb-0 flex-shrink-0">
        <img
          className="h-56 rounded-lg object-cover md:w-56"
          src={`/auth/${currentTutor?.profilePhoto}`}
          alt=""
        />
      </div>
      <div className="">
        <p className="text-xl font-medium ">{currentTutor?.username}</p>
        <div className="flex gap-2">
          <p className=" text-sm font-medium ">{currentTutor?.email} </p>
          {modal && <EditEmail modal={modal} setModal={setModal} />}
          <span
            onClick={() => setModal(true)}
            className="text-blue-600 text-sm cursor-pointer underline"
          >
            Edit
          </span>
        </div>
        <p className="mb-4 text-sm font-medium ">{currentTutor?.profession}</p>
        <p className="mb-4 text-sm ">{currentTutor?.about}</p>

        <div className="flex space-x-2">
          {change && <EditProfile change={change} setChange={setChange} />}
          <button
            onClick={() => {
              setChange(true);
            }}
            className="my-2 rounded-sm px-5 py-3 text-center font-bold transition text-lg bg-primary text-white sm:me-auto"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
