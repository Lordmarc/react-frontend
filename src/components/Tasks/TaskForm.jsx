import { useState } from "react";

export default function TaskForm({ onAdd })
{
 
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!task.name.trim()) return;          
  const newTask = {id: Date.now(), name: task.name, description: task.description, done: false};
  onAdd(newTask);
  setTask({ name: "", description: ""});
  }
  
  const handleChange = (e) => {
    setTask(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={task.name} onChange={handleChange} />
      <input type="text" name="description" value={task.description} onChange={handleChange} />
      <button>Add Task</button>
    </form>
  )
}