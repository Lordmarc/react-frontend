import { useEffect, useState } from "react";

function Counter () {
  const [count, setCount] = useState(0)

  const incrementTwice = () => {
    console.log("Before first setCount:", count)
    setCount(prev => prev + 1)
    console.log("After first setCount:")
    setCount(prev => prev + 1)
    console.log("After second setCount:", count)
   
  }
  useEffect(() => {
    console.log("useEffect: Count changed to", count)
  }, [count])

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h2>Counter App</h2>

      <p>Count: {count}</p>
      <button onClick={incrementTwice}>+2</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}

export default Counter