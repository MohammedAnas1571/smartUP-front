import TableContent from "@/components/Admin/TableContent";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { User } from "./UserList";
import { usePagination } from "@/CustomHook/usePagination";
import PaginationPage from "@/components/PaginationPage";

const TutorList = () => {
  const [users, setUsers] = useState<User[]>([]);
 
  const { currentPage, setCurrentPage, totalPages, setTotalPages } =
    usePagination();

  const fetchUsers = async () => {
    try {
      const { data }: AxiosResponse<{ user: User[]; pageCount: number }> =
        await axios.get(`/auth/admin/tutor/?page=${currentPage}`);
      setUsers(data.user);
      setTotalPages(data.pageCount);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const handleBlock = async (id: string,isBlocked:boolean) => {
    try {
      await axios.put("/auth/admin/block-instructor", { id, isBlocked });
      fetchUsers();
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went To Wrong");
      }
    }
  };
  return (
    <div>
      <TableContent handleBlock={handleBlock} users={users}  />
      <PaginationPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TutorList;
