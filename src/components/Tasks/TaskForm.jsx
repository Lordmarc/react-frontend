import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
      onAdd(task);
      setTask({
        name: "",
        description: ""
      })
  
  };

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md border border-gray-300 flex flex-col gap-4 w-full"
    >
      <div className="flex flex-col ">
        <label htmlFor="name" className="text-sm font-semibold">
          TASK TITLE
        </label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="What needs  to be done?"
          className="px-3 py-2 rounded border border-gray-300"
        />
      </div>

       <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-semibold">
          DESCRIPTION
        </label>
        <textarea
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Add a note or extra details..."
          className="px-3 py-2 rounded border border-gray-300h h-28"
        />
      </div>
      <button className="w-full text-center p-2 bg-[#215E61] rounded-md inline-block place-content-center text-white font-semibold"><i className="fa-solid fa-plus"></i> Add Task</button>
    </form>
  );
}
