import { useEffect, useState } from "react";
import Status from "./Status";

export default function ActiveStatus() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log(`User is now ${status ? 'online' : 'offline'}`);
  },[status]);

  return(
    <div>
      <Status isOnline={status}/>
    </div>
  );
}