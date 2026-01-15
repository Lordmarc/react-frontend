import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList()
{
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prev => [...tasks, task]);
  }
  
  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t));
  }


  return (
    <div>
      <h2>TaskList</h2>
      <TaskForm onAdd={addTask}/>
      {tasks.map(t => (
        <Task key={t.id} task={t} onToggle={toggleDone} />
      ))}
    </div>



  );
}