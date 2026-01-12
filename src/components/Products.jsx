import { useState } from "react"
import { useEffect } from "react";

function Products() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count)
  }, [count]);

  return (
    <div>
      <h2>Products</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  )
}

export default Products