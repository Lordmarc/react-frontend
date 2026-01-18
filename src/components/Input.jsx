import useInput from "../hooks/useInput";

export default function Input(){
  const {
    value, 
    onChange,
    reset
  } = useInput();
  console.log(value)
  return (
    <>
      <label htmlFor="some-text">Text:</label>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={reset}>reset</button>
    </>
  );
}