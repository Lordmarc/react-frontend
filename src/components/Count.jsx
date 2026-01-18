
export default function Count({ count, onIncrement, onDecrement, onReset })
{
  return(
    <>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </>
    
  );
}