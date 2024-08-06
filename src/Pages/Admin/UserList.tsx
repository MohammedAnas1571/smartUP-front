import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import TableContent from "../../components/Admin/TableContent";
import { usePagination } from "@/CustomHook/usePagination";
import PaginationPage from "@/components/PaginationPage";

export type User = {
  username: string;
  email: string;
  _id: string;
  role: string;
  profilePhoto: string;
  isBlocked:boolean
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { currentPage, setCurrentPage, totalPages, setTotalPages } =  usePagination();

   
  const fetchUsers = async () => {
    try {
      const { data }: AxiosResponse<{ user: User[]; pageCount: number }> =
        await axios.get(`/auth/admin/users?page=${currentPage}`);
      setUsers(data.user);
     
      setTotalPages(data.pageCount);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data.err) {
        toast.error(
          err.response.data.message || " Sorry Something  Went Wrong!"
        );
      }
    }
  };

  useEffect(() => {
    fetchUsers()
    
  }, [currentPage])



  const handleBlock = async (id: string,isBlocked:boolean) => {
    try {
     await axios.put("/auth/admin/block-user", { id,isBlocked })
     
     fetchUsers()
     
     
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };

  return (
    <>
      <TableContent handleBlock={handleBlock} users={users}  />
      <PaginationPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default UserList;
