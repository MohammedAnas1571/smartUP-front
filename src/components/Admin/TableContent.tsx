import { User } from "../../Pages/Admin/UserList";

type FullDetails = {
  users: User[];
  handleBlock: (id: string,isBlocked:boolean) => void,
}


const TableContent = ({handleBlock,users}:FullDetails) => {
  return (

        <div>
    <table className="min-w-full divide-y ">
    <thead>
        <tr>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">Role</th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">Profile</th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">Action</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user,index) => (
        <tr key={user._id}> 
        
            <td className="px-6 py-4 whitespace-nowrap">{index+1}.</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
            <td className="px-6 py-4 whitespace-nowrap">
        <img className='w-10 h-10 rounded-full' src ={`/auth/${user.profilePhoto}`} alt="no image"/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <button onClick={() => handleBlock(user._id,user.isBlocked)} className={`px-4 py-2 font-medium text-white rounded-md transition duration-150 ease-in-out ${user.isBlocked? "bg-red-600" :"bg-green-600" }`}>
  {user.isBlocked ? 'Deactivate' : 'Activate'}
</button>

             
            </td>
        </tr>
      ))}
    </tbody>
</table>
  
    </div>
  )
}

export default TableContent