import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleBox()
{
  const {
    isOn,
    toggle
  } = useToggle();

  return(
    <>
    <p>Status: {isOn ? 'ON': 'OFF'}</p>
    <button onClick={toggle}>Toggle</button>
    </>
  )
}