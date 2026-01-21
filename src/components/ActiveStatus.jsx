import { useEffect, useState } from "react";
import Status from "./Status";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function ActiveStatus() {
  const { isOnline, toggle} = useOnlineStatus();


  return(
    <div>
      <button onClick={toggle}>{isOnline ? 'OFFLINE' : 'ONLINE'}</button>
      <Status isOnline={isOnline}/>
    </div>
  );
}