import { MdDashboard } from "react-icons/md";

export default function Navbar() {
  return(
    <nav className="flex items-center text-4xl gap-2 border-b border-gray-300 px-8 py-4 bg-white shadow-sm">
      <div className="bg-[#7B542F]  p-2 rounded text-white">
        <MdDashboard/>
      </div>
      <h2 className="font-semibold">StatusHub</h2>
    </nav>
  );
}