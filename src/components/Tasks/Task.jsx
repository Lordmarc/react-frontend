import { FaCircleCheck } from "react-icons/fa6";

export default function Task({ task, onToggle }) {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded p-2">
      <div className="h-8 w-8 rounded-full border border-gray-300 " onClick={() => onToggle(task.id)}>
        {task.status && (
          <FaCircleCheck className="w-8 h-8 text-green-500" />
        )}
      </div>

      <div>
        <span >{task.name}</span>
        <p>{task.description}</p>
      </div>
      
    </div>
  );
}
