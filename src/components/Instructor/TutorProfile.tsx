import { useState } from "react";
import EditProfile from "./EditProfile";

import { TutorDetails } from "@/Pages/Instructor/DashBoard";
const TutorProfile = ({
  tutor,
  setTutor,
}: {
  tutor: TutorDetails;
  setTutor: React.Dispatch<React.SetStateAction<TutorDetails | undefined>>;
}) => {
  const [change, setChange] = useState(false);
  console.log(tutor.profilePhoto);

  return (
    <div className="mx-auto flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
  <div className="mb-4 md:mr-6 md:mb-0">
    <img className="h-56 rounded-lg object-cover md:w-56"  src={tutor.profilePhoto}alt="" />
  </div>
  <div className="">
    <p className="text-xl font-medium text-gray-700">{tutor.username}</p>
   

    <p className="mb-4 text-sm font-medium text-gray-500">{tutor.profession}</p>
   
    
    <div className="flex space-x-2">
         {change && (
            <EditProfile
              change={change}
              tutor={tutor}
              setTutor={setTutor}
              setChange={setChange}
            />
          )}
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





//  <div className="flex w-full flex-col items-center rounded-xl border px-4 py-4 text-center justify-center">
//         <div className="mb-4 md:mr-6 md:mb-0">
//           <img
//             className="h-56 rounded-lg object-cover md:w-56"
//             src={tutor.profilePhoto}
//             alt=""
//           />
//         </div>
//         <div className="w-full">
//           <p className="text-xl font-medium text-gray-700">{tutor.username}</p>
//           <p className="mb-4 text-sm font-medium text-gray-500">
//             {tutor.profession}
//           </p>
//           <div className="w-6/12" key={tutor.about} style={{ width: "50%" }}>
//             <p className="">{tutor.about}</p>
//           </div>
//           {change && (
//             <EditProfile
//               change={change}
//               tutor={tutor}
//               setTutor={setTutor}
//               setChange={setChange}
//             />
//           )}
//           <button
//             onClick={() => {
//               setChange(true);
//             }}
//             className="my-5 rounded-sm px-5 py-3 text-center font-bold transition text-lg bg-primary text-white sm:me-auto"
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>