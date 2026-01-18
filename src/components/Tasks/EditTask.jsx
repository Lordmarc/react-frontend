import { useEffect, useState } from "react"
import useInput from "../../hooks/useInput";

export default function EditTask({task, onClose, onSave})
{
  const [data, setData] = useState({
    name: "",
    desc: ""
  });

  useEffect(() => {
    if(task){
      setData({
        name: task.name,
        desc: task.description
      })
    }
  },[task])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task.id, {...data});
    onClose();
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => ({...prev, [name]: value}));
  }

  return(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <form
      onSubmit={handleSubmit}
      className="p-4 ... bg-white max-w-md w-full rounded-md"
    >
      <div className="flex flex-col ">
        <label htmlFor="name" className="text-sm font-semibold">
          TASK TITLE
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
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
          value={data.desc}
          onChange={handleChange}
          placeholder="Add a note or extra details..."
          className="px-3 py-2 rounded border border-gray-300h h-28"
        />
      </div>
     <div className="flex gap-2 justify-end">
      <button
        type="button"
        onClick={onClose}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-3 py-1 bg-[#215E61] text-white rounded"
      >
        Save Task
      </button>
    </div>

    </form>
    </div>
  )
}