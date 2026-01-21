import { HiUserAdd } from "react-icons/hi";

export default function Header(){

  return(
    <div className="flex items-center w-full">
      <div>
        <h1 className="font-bold text-[45px]">User Status Dashboard</h1>
        <p className="text-[#84602d] text-2xl">Monitor real-time connectivity across your team.</p>
      </div>

      <button className="inline-flex place-items-center gap-2 ml-auto bg-[#7B542F] rounded-lg text-white  p-4 text-2xl">
        <HiUserAdd/>
        Invite User
      </button>
    </div>
  )
}