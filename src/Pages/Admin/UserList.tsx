import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type User = {
    username: string;
    email: string;
    id: string;
    role: string;
    profilePhoto: string; 
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const { data }: AxiosResponse<{ user: User[] }> = await axios.get("/auth/admin/users");
            setUsers(data.user);
        } catch (err: any) {
            toast(err.response.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = async (userId: string) => {
        try {
            await axios.put("/auth/admin/block", { id: userId });
           
        } catch (error: any) {
            toast(error.response.message);
        }
    }

    return (
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 w-full">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                    <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">No</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">photo</th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users.map((user,index) => (
                        <tr key={user.id}>
                            <td className="py-4 px-6 border-b border-gray-200">{index+1}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{user.username}</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">{user.email}</td>
                            <td className="py-4 px-6 border-b border-gray-200"><img className="w-12 h-12 rounded-full" src={user.profilePhoto} alt="" /></td>
                            <td className="py-4 px-6  border-gray-200">
                                <button className='border-2 rounded-md border-red-500 text-xl p-2' onClick={() => handleChange(user.id)}>Block</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
