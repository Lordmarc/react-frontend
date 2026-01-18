import { useEffect, useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  // FETCH TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();

        setTasks(data.tasks);
        setCount(data.active);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // ADD TASK (OPTIMISTIC)
  const addTask = async (task) => {
    const tempTask = {
      id: Date.now(),
      ...task,
      status: false,
      optimistic: true,
    };

    setTasks(prev => [...prev, tempTask]);
    setCount(prev => prev + 1);

    try {
      const res = await fetch("http://localhost:8000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!res.ok) throw new Error("Failed to add task");

      const data = await res.json();

      setTasks(prev =>
        prev.map(t => (t.id === tempTask.id ? data.task : t))
      );
    } catch (err) {
      console.log(err.message);
      setTasks(prev => prev.filter(t => t.id !== tempTask.id));
      setCount(prev => prev - 1);
    }
  };

  // TOGGLE TASK
  const toggleTask = async (id) => {
    const previous = [...tasks];

    const optimistic = tasks.map(t =>
      t.id === id ? { ...t, status: !t.status } : t
    );

    setTasks(optimistic);
    setCount(optimistic.filter(t => !t.status).length);

    try {
      const res = await fetch(
        `http://localhost:8000/api/tasks/${id}/status`,
        { method: "PATCH" }
      );

      if (!res.ok) throw new Error("Failed to toggle");

      const data = await res.json();

      setTasks(prev =>
        prev.map(t => (t.id === id ? data.task : t))
      );
    } catch (err) {
      console.log(err.message);
      setTasks(previous);
      setCount(previous.filter(t => !t.status).length);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    const previous = [...tasks];

    const optimistic = tasks.filter(t => t.id !== id);
    setTasks(optimistic);
    setCount(optimistic.filter(t => !t.status).length);

    try {
      const res = await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");
    } catch (err) {
      console.log(err.message);
      setTasks(previous);
      setCount(previous.filter(t => !t.status).length);
    }
  };

  const updateTask = async(id, updateFields) => {
    const previous = [...tasks];

    const optimistic = tasks.map(t => 
      t.id === id ? {...t, ...updateFields}: t
    )

    setTasks(optimistic);

    try{
      const res = await fetch(`http://localhost:8000/api/tasks/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updateFields)
      });
      if(!res.ok) throw new Error("Update Failed");
      const data = await res.json();

      setTasks(prev => prev.map(t => t.id === id ? data.task : t));
    }catch(err){
      console.log(err.message)
      setTasks(previous)
    }
  } 

  const handleEditTask = (task) => {
    setEditingTask(task)
  }

  const filteredTasks = tasks.filter(t =>
    filter === "all" ? true : t.status
  );

  return {
    tasks: filteredTasks,
    loading,
    count,
    filter,
    editingTask,
    setEditingTask,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    handleEditTask
  };
}
