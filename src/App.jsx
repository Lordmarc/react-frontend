import Products from "./components/Products";
import Counter from "./components/Counter";
import TaskList from "./components/Tasks/TaskList";
import TaskForm from "./components/Tasks/TaskForm";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Task from "./components/Tasks/Task";


function App() {
  const [counters, setCounters] = useState([
    {id: 1, value: 0},
    {id: 2, value: 5},
    {id: 3, value: 10},
  ]);

  const increment = (id) => {
    setCounters(prev => prev.map(c => c.id === id ? {...c, value: c.value + 1} : c));
  }

  const deleteCounter = (id) => {
    setCounters(prev => prev.filter(c => c.id !== id));
  }

  const addCounter = () => {
    const newCounter = {id: Date.now(), value:0};
    setCounters(prev => [...prev, newCounter]);
  }

  const resetValue = () => {
    setCounters(prev => prev.map(p => ({...p, value: 0})))
  }

  return (
 
    <>
    <h1>Counter</h1>
    <button onClick={addCounter}>Add New</button>
    <button onClick={resetValue}>Reset all to 0</button>
    {counters.map(c => (
      <Counter
        key={c.id}
        counter={c}
        onIncrease={increment}
        onDelete={deleteCounter}
      />
    ))}
    </>
  );
}

export default App;
