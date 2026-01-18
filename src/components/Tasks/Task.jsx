import { FaCircleCheck } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";


export default function Task({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded p-2 w-full">
      <div className="h-8 w-8 rounded-full border border-gray-300 " onClick={() => onToggle(task.id)}>
        {task.status && (
          <FaCircleCheck className="w-8 h-8 text-green-500" />
        )}
      </div>

      <div>
        <h3 className="font-semibold">{task.name}</h3>
        <p className="text-gray-500">{task.description}</p>
      </div>
      <div className="ml-auto mr-2 flex">
        <button  className="p-2 rounded hover:bg-green-100" onClick={() => onEdit(task)}><FaPencilAlt className="text-green-500"/></button>
        <button className="cursor-pointer hover:bg-red-100 p-2 rounded" onClick={() => onDelete(task.id)}><FaTrashAlt className="text-red-500 text-xl"/></button>
      </div>
    </div>
  );
}
