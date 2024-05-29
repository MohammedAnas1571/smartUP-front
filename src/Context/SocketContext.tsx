import { createContext, useContext, useState } from "react";
import { Socket } from "socket.io-client";
type SocketContextType = {
 socket: Socket | null;
 setSocket :(connection:Socket)=>void
}

const SocketContext = createContext<SocketContextType|undefined>(undefined)


 
 const SocketProvider = ({children}:{children:React.ReactNode}) => {
   const [socket,setSocket] = useState<Socket|null>(null)

   return (
     <SocketContext.Provider value={{socket,setSocket}} >

        {children}
     </SocketContext.Provider>
   )
 }
 
 export default SocketProvider



  export function useSocket (){
    const context = useContext(SocketContext)
    if(context === undefined) throw new Error("useSocket must be used within a SocketProvider")
        return context
    
  }