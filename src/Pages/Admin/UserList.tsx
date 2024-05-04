
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import TableContent from '../../components/Admin/TableContent';

export type User = {
    username: string;
    email: string;
    _id: string;
    role: string;
    profilePhoto: string; 
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [change,setChange] = useState<boolean> (true)

    const fetchUsers = async () => {
        try {
            const { data }: AxiosResponse<{ user: User[] }> = await axios.get("/auth/admin/users");
            setUsers(data.user);
        } catch (err: any) {
            toast(err.response.message);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleBlock = async (id: string) => { 
      console.log(id)     
        try {  
            await axios.put("/auth/admin/block-user",  {id,change}  );
           setChange(!change)
        } catch (err) {
          if (axios.isAxiosError(err)&&err.response) {
            toast.error(err.response.data.message||"Something Went To Wrong");
         
         }
    }
  }    
   
  return (
   <TableContent handleBlock={handleBlock} users={users} change={change}/>
   
  )
}

export default UserList