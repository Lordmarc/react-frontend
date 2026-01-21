import { useEffect, useState } from "react";

export default function CounterEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Count changed: ", count);
    setTimeout(() => {
      setMessage(`Fetched after 2s: count is ${count}`)

    }, 2000)
  }, [count]);

  const increment = () => {
    setCount(prev => prev + 1);
  }
  return(

    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <p>Message: {message}</p>
    </div>
  );
}