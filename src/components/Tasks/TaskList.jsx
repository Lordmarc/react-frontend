import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";
import useTasks from "../../hooks/useTasks";
import EditTask from "./EditTask";

export default function TaskList()
{
  const {
    tasks,
    loading,
    count,
    filter,
    editingTask,
    setFilter,
    setEditingTask,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    handleEditTask
  } = useTasks();

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
          <button className={`flex-1 font-semibold  ${filter === 'all' ? 'bg-[#215E61] text-white' : '' }`} onClick={() => setFilter("all")}>All</button>
          <button className={`flex-1 font font-semibold ${filter === 'completed' ? 'bg-[#215E61] text-white' : '' }`} onClick={() => setFilter("completed")}>Completed</button>
        </div>
      <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
     
             {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onEdit={handleEditTask}
        />
      ))}

    
      </div>
      {editingTask && (
        <EditTask
        task={editingTask}
        onClose={() => setEditingTask(null)}
        onSave={updateTask}/>
      )}
    </div>



  );
}