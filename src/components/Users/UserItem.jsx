import { FaUserCircle } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";


export default function UserItem({ user, onToggle })
{
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow p-3 border border-gray-300 ">
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-4xl"/>
        <div className="flex flex-col">
        <p className="text-xl font-semibold">{user.name}</p>
        <p className={user.online === true ? 'text-green-500': 'text-gray-400'}>{user.online === true ? 'ONLINE' : 'OFFLINE'}</p>
        </div>
      </div>

      <button onClick={() => onToggle(user.id)} className="inline-flex place-items-center bg-[#f5efef] p-4 font-semibold gap-2 text-lg rounded-md">
        <LuArrowLeftRight/>
        Toggle Status</button>
    </div>
  );
}