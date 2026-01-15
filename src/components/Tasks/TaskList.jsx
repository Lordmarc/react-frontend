import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList()
{
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTasks = async () => {
      try{
         const res = await fetch('http://localhost:8000/api/tasks');

         if(!res.ok) throw new Error('Failed to Fetch Tasks...');
        const data = await res.json();

        setTasks(data);
        setLoading(false);
      }catch(err){
        console.log(err.message);
        setLoading(false)
      }
     
    }
    getTasks();
  },[])
  const addTask = (task) => {
    setTasks(prev => [...tasks, task]);
  }

  
  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t));
  }
  console.log(tasks)
  return (
    <div>
      <h2>TaskList</h2>
      <TaskForm onAdd={addTask}/>
      {tasks.map(t => (

        <Task key={t.id} task={t} />
      ))}
    </div>



  );
}