import { useEffect, useState } from "react";
import { messageDetails } from "../Chat/Chat";

import { useSocket } from "@/Context/SocketContext";
import { useParams } from "react-router-dom";
import { RootState } from "@/Redux/Store";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const [messages, setMessages] = useState<messageDetails[]>([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState<{ username: string; profilePhoto: string }>({
    username: "",
    profilePhoto: "",
  });
  const { socket } = useSocket();
  const { userID } = useParams();
  const { currentTutor } = useSelector((state: RootState) => state.tutor);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.emit("messages_page", userID);

      socket.on("user", (data) => {
        setUser(data);
      });

      socket.on("messages", (data) => {
        console.log("messages from messages_page: ", data);
        setMessages(data);
      });

      return () => {
        socket.off("message");
        socket.off("messages");
      };
    }
  }, [socket, userID]);

  const onSubmit = () => {
    if (!socket) return;

    socket.emit("send_message", {
      senderID: currentTutor?._id,
      receiverID: userID,
      message: input,
    });
    setInput("");
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex-grow flex-shrink flex flex-col min-h-0 max-h-[calc(100vh-64px)]">
      <div className="w-full flex flex-col min-h-0">
        <div className="py-2 px-3 bg-slate-200 flex flex-row justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={`/auth/${user.profilePhoto}`}
              />
            </div>
            <div className="ml-4">
              <p className="text-gray-700 text-xs mt-1">{user.username}</p>
            </div>
          </div>
        </div>

        <div className="flex-grow flex-shrink overflow-auto min-h-0">
          <div className="py-2 px-3">
            <div className="flex justify-center mb-2">
              <div className="rounded py-2 px-4 bg-green-200">
                <p className="text-sm uppercase">{formatDate(new Date())}</p>
              </div>
            </div>

            <div className={`flex-1 flex flex-col`}>
              {messages.map((msg) => (
                <div
                  className={`flex w-full ${
                    msg.senderID === currentTutor?._id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    key={msg._id}
                    className={`rounded-xl py-3 px-4 inline-block flex-grow-0 mb-3 max-w-[80%] ${
                      msg.senderID === currentTutor?._id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <p className="text-sm break-words">{msg.message}</p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                      12:45 pm
                    </p>
                  </div>
                </div>
              ))}
              {/* {messages.map((msg) => (
              <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                {msg}
              </p>
            </div>
            ))} */}
            </div>
          </div>
        </div>

        <div className="bg-slate-200 px-4 py-4 flex items-center flex-shrink-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                opacity=".45"
                fill="#263238"
                d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
              ></path>
            </svg>
          </div>
          <div className="flex-1 mx-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnterKey}
              placeholder="Type a message"
              className="w-full border rounded px-2 py-2"
            />
          </div>
          <div>
            <div>
              <img
                onClick={onSubmit}
                className="w-9 h-9"
                src="\8200194_sendright_send_mail_email_message_icon (1).png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
