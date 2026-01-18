import useCounter from "../hooks/useCounter";

export default function Counter()
{
  const {
    count,
    increase
  } = useCounter();
  return(
    <div>
      {/* <p>{counter.value}</p>
      <button disabled={counter.value >= 10}  onClick={() => onIncrease(counter.id)} className={`px-2 py-1 rounded ${counter.value >= 10 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}>+1</button>
      <button onClick={() => onDelete(counter.id)}>Delete</button> */}
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}