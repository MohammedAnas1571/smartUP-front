import { useSocket } from "@/Context/SocketContext";
import { RootState } from "@/Redux/Store";

import axios from "axios";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { toast } from "sonner";

type Tutor = {
  username: string;
  profilePhoto: string;
  profession: string;
  _id: string;
};
export type messageDetails = {
  senderId: string;
  reciverId: string;
  message: string;
};

function Chat({
  setShowChat,

  tutor,
}: {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  tutor: Tutor;
}) {
  const [input, setInput] = useState("");
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [messages, setMessages] = useState<messageDetails[]>([]);
  const { setSocket } = useSocket();

  // const fetchChat = async () => {
  //   try {
  //     const { data } = await axios.get(`/auth/chat/getChat/${currentUser?._id}/${tutor._id}`);
  //     setMessages(data);

  //   } catch (err) {
  //     if (axios.isAxiosError(err) && err.response) {
  //       toast(err.response.data.message || "Something Went To Wrong");
  //     }
  //   }
  // };
  useEffect(() => {
    // fetchChat();

    const socket = io("http://localhost:3000", { withCredentials: true });

    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  // socket.on("recive", (data) => {
  //   console.log(data);
  //   setMessages([...messages, data]);
  // });
  // const sendMessage = () => {
  //   if (!input.trim()) {
  //     return;
  //   }

  //   socket.emit("message", {
  //     message: input,
  //     senderId: currentUser?._id,
  //     tutorId: tutor._id,
  //     userId: currentUser?._id,
  //   });
  //   setInput("");
  // };

  const enterSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      // sendMessage();
    }
  };

  return (
    <div className=" fixed z-50 bottom-16 right-4 w-96">
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
          <p className="text-lg font-semibold">{tutor.username}</p>
          <button
            onClick={() => setShowChat(false)}
            className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-4 h-80 overflow-y-auto">
          {messages.map((item) => {
            if (item.senderId === currentUser?._id) {
              return (
                <div className="mb-2 text-right">
                  <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                    {item.message}
                  </p>
                </div>
              );
            } else {
              return (
                <div className="mb-2">
                  <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                    {item.message}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="p-4 border-t flex">
          <input
            id="user-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={enterSubmit}
            placeholder="Type a message"
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            // onClick={sendMessage}
            id="send-button"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
