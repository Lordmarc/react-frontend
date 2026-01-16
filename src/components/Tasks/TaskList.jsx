import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";

export default function TaskList()
{
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
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
    setTasks(prev => prev.map(t => t.id === id ? {...t, status: !t.status} : t));
  }
  console.log(tasks)

  if(loading) return <p>Loading....</p>
  return (
    <div className="rounded bg-white w-full max-w-md">
      <TaskTitle/>

      <TaskForm onAdd={addTask}/>
      <div className="flex w-full justify-between my-4"> 
        <p>Your Tasks</p>
        <span>active</span>
      </div>
      <div>
   
        {tasks.map(t => (

          <Task key={t.id} task={t} onToggle={toggleDone}/>
        ))}
      </div>
  
    </div>



  );
}