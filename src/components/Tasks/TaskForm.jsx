import { useState } from "react";
import useInput from "../../hooks/useInput";

export default function TaskForm({ onAdd }) {
  const name = useInput("");
  const description = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
  

      onAdd({
        name: name.value,
        description: description.value
      })
      
      name.reset(); 
      description.reset();
  };

  // const handleChange = (e) => {
  //   setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  console.log(name)
  console.log(description)
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
          value={name.value}
          onChange={name.onChange}
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
          value={description.value}
          onChange={description.onChange}
          placeholder="Add a note or extra details..."
          className="px-3 py-2 rounded border border-gray-300h h-28"
        />
      </div>
      <button className="w-full text-center p-2 bg-[#215E61] rounded-md inline-block place-content-center text-white font-semibold"><i className="fa-solid fa-plus"></i> Add Task</button>
    </form>
  );
}
