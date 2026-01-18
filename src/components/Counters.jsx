import { useEffect, useState } from "react";
import Count from './Count';
import useCounter from "../hooks/useCounter";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Counters(){
 
  const {
    count,
    increment,
    decrement,
    reset,

  } = useCounter(0);

  useDocumentTitle(count);

  // useEffect(() => {
  //   console.log('Render')
  // },[]);
  // useEffect(() => {
  //   console.log('Count change:', count)
  // },[count]);

  // const increment = () => {
  //   setCount(prev => prev + 1);
  // }


  return(
    <>
    <Count onIncrement={increment} onDecrement={decrement} onReset={reset} count={count}/>
    </>
  );
}