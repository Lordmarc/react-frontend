import { FaRegCheckCircle } from "react-icons/fa";

export default function TaskTitle()
{
  return(
    <div className="flex flex-col justify-center items-center gap-2 mb-16">
      <div className="rounded-md p-2 inline-flex place-content-center bg-slate-200 text-4xl">
      <FaRegCheckCircle className="text-[#215E61]"/>
      </div>
      <h2 className="font-bold text-4xl">Task Manager</h2>
      <p className="text-slate-500">Clean, minimalist workspace for to do tasks</p>
    </div>
  )
}