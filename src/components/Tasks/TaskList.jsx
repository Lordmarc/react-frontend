import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";

export default function TaskList()
{
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getTasks = async () => {
      
      try{
         const res = await fetch('http://localhost:8000/api/tasks');

         if(!res.ok) throw new Error('Failed to Fetch Tasks...');
        const data = await res.json();

        
        setTasks(data.tasks);
        setCount(data.active);
        setLoading(false);
      }catch(err){
        console.log(err.message);
        setLoading(false)
      }
     
    }
    getTasks();
  },[])
  const addTask = async (task) => {
    const tempTask = {
      id: Date.now(),
      name: task.name,
      description: task.description,
      status: false,
      optimistic: true
    };

    
    setTasks(prev => [...prev, tempTask]);
    setCount(prev => prev + 1);

    try {
      const response = await fetch('http://localhost:8000/api/tasks',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) throw new Error("Failed to create task");
      const data = await response.json();

      setTasks(prev => prev.map(t => t.id === tempTask.id ? data.task : t) );
    }catch(err)
    {
      console.log(err.message);
      setTasks(prev => prev.filter(t => t.id !== tempTask.id));
      setCount(prev => prev - 1);
    }
  }

  const toggleDone = async (id) => {
   const previousTask = tasks;

   const optimisticStatus = tasks.map(task => task.id === id ? {...task, status: !task.status}: task);
    setTasks(optimisticStatus);
    setCount(optimisticStatus.filter(task => task.status === false).length);

    try{
      const res = await fetch(`http://localhost:8000/api/tasks/${id}/status`,
        {method: 'PATCH', }
      );
    
      const updatedTask = await res.json();
      console.log("updated tasks",updatedTask)
      if(!res.ok) throw new Error('Failed to update task!');

      setTasks(prev =>
        {const newTask = prev.map(task => task.id === id ? updatedTask.task: task)
          setCount(newTask.filter(t => t.status === false).length);
          return newTask;
        });

      setLoading(false)
    }catch(err){
      console.log(err.message);
      setTasks(previousTask);
      setCount(previousTask.filter(task => task.status === false).length);
      setLoading(false)
    }
  }
  
  const deleteTask = async(id) =>{
    const previousTask = tasks;

    const optimisticTask = tasks.filter(task => task.id !== id );
    setTasks(optimisticTask);
    setCount(optimisticTask.filter(task => task.status === false).length);

    try{
      const res = await fetch(`http://localhost:8000/api/tasks/${id}`,
        { method: 'DELETE'}
      );

        if(!res.ok) throw new Error("Failed to delete task.");

    }catch(err){
      console.log(err.message)
      setTasks(previousTask);
      setCount(previousTask.filter(task => task.status === false).length);
    }
  } 

  const completedTask = () => {
    setTasks(prev => prev.filter(t => t.status !== false));
    setFilter('completed')
  }
  const allTask = async() => {
    try {

    const res = await fetch('http://localhost:8000/api/tasks');
    
    const data = await res.json();

    setTasks(data.tasks);
    setFilter('all')
    setLoading(false)
    }catch(err){
      console.log(err.message);
      setLoading(false)
    }
   
  }

  const filteredTask = tasks.filter(t => 
    filter === 'all' ? true : t.status === true
  )
  console.log(tasks)
  console.log('active', count)

  if(loading) return <p>Loading....</p>
  return (
    <div className="rounded m-4 bg-white w-full max-w-md">
      <TaskTitle/>

      <TaskForm onAdd={addTask} />
      <div className="flex w-full justify-between my-4"> 
        <p className="text-sm font-semibold">Your Tasks</p>
        <p className="inline-flex place-items-center gap-1 bg-gray-300 px-1 rounded text-sm font-semibold text-gray-500"><span>{count}</span>ACTIVE</p>
      </div>
       <div className="flex">
          <button className={`flex-1 font-semibold  ${filter === 'all' ? 'bg-[#215E61] text-white' : '' }`} onClick={allTask}>All</button>
          <button className={`flex-1 font font-semibold ${filter === 'completed' ? 'bg-[#215E61] text-white' : '' }`} onClick={completedTask}>Completed</button>
        </div>
      <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
        {filteredTask.length > 0 ? (
          filteredTask.map(task => (
            <Task key={task.id} task={task} onToggle={toggleDone} onDelete={deleteTask} />
          ))
        ) : (<p className="text-center text-gray-500">No completed tasks yet</p>)}
      
      </div>
  
    </div>



  );
}