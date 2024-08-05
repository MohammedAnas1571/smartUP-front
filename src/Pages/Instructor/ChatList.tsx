import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { NavLink, Outlet } from "react-router-dom";

import { useSocket } from "@/Context/SocketContext";


export interface Users {
  _id: string;
  username: string;
  profilePhoto: string;
}

const ChatList = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const { socket } = useSocket();

  const { currentTutor } = useSelector((state: RootState) => state.tutor);

  useEffect(() => {
    if (socket) {
      socket.emit("sidebar_users", currentTutor?._id);

      socket.on("users", (data) => {
        console.log(data);
        setUsers(data);
      });
    }
  }, [socket]);

  return (
    <div className="h-[calc(100vh-64px)] relative">
      <div className="flex flex-col absolute inset-0">
        <div className="flex flex-col">
          <div className="flex flex-grow flex-shrink">
            <div className="flex-shrink-0 w-[300px] border flex flex-col items-stretch">
              <div className="py-2 px-3 h-[60px] bg-gray-100 flex flex-row justify-between items-center">
                <div>
                  <h1 className="text-2xl font-semibold">Chats</h1>
                </div>

                <div className="flex">
                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity=".55"
                        fill="#263238"
                        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* 
              <div className="py-2 px-2 bg-grey-lightest">
                <input
                  type="text"
                  className="w-full px-2 py-2 text-sm"
                  placeholder="Search or start new chat"
                />
              </div> */}

              <div className=" flex-1 overflow-auto">
                {users.map((user) => (
                  <NavLink
                    key={user._id}
                    className={({ isActive }) =>
                      `px-3 flex items-center hover:bg-gray-300 cursor-pointer ${
                        isActive ? "bg-gray-300" : "hover:bg-gray-300"
                      }`
                    }
                    to={user._id}
                    
                  >
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={`/auth/${user.profilePhoto}`}
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="text-grey-darkest">{user.username}</p>
                        <p className="text-xs text-grey-darkest">12:45 pm</p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
