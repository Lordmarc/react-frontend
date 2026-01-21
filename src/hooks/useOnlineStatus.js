import { useState, useEffect } from "react";

export default function useOnlineStatus(){
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log(`User is now ${isOnline ? 'online' : 'offline'}`);
  },[isOnline]);

  const toggle = () => {
    setIsOnline(prev => !prev);
  }

  return { isOnline, toggle };

}