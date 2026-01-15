import { useEffect, useState } from "react";

export default function Counter({ counter, onIncrease, onDelete })
{
  return(
    <div>
      <p>{counter.value}</p>
      <button disabled={counter.value >= 10}  onClick={() => onIncrease(counter.id)} className={`px-2 py-1 rounded ${counter.value >= 10 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}>+1</button>
      <button onClick={() => onDelete(counter.id)}>Delete</button>
    </div>
  );
}