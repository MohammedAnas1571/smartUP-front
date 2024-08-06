import { RootState } from "@/Redux/Store";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Socket, io } from "socket.io-client";

type SocketContextType = {
  socket: Socket | null;
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { user, tutor } = useSelector((state: RootState) => state);

  useEffect(() => {
    const socket = io('https://aflozz.shop', { withCredentials: true });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [user.currentUser, tutor.currentTutor]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;

export function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined) throw new Error("useSocket must be used within a SocketProvider");
  return context;
}
