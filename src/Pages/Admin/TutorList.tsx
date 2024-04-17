import TableContent from '@/components/Admin/TableContent'
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';


import { User } from './UserList';




const TutorList = () => {
  const [users, setUsers] = useState<User[]>([])
  const [change,setChange] = useState<boolean> (true)

    const fetchUsers = async () => {
        try {
            const { data }: AxiosResponse<{ user: User[] }> = await axios.get("/auth/admin/tutor");
            setUsers(data.user);
        }catch (err) {
          if (axios.isAxiosError(err)&&err.response) {
            toast.error(err.response.data.message||"Something Went To Wrong");
         
         }
    }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleBlock = async (id: string) => { 
      console.log(id)     
        try {  
            await axios.put("/auth/admin//block-instructor",  {id,change}  );
           setChange(!change)
        } catch (err) {
          if (axios.isAxiosError(err)&&err.response) {
            toast.error(err.response.data.message||"Something Went To Wrong");
         
         }
    }
  }    
  return (
    <div>
      <TableContent handleBlock={handleBlock} users={users} change={change}/>
    </div>
  )
}

export default TutorList