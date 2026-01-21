import { act, useEffect, useState } from "react";
export default function useUsers() {
  //  const [users, setUsers] = useState([
  //   {id: 1, name: "Aira", online: false},
  //   {id: 2, name: "Marc", online: false},
  //   {id: 3, name: "Bob", online: true},
  //   {id: 4, name: "Ced", online: true},
  //   {id: 5, name: "Laz", online: true}
  // ]);
  const [users, setUsers] = useState([]);

  const [activeTab, setActiveTab] = useState("All User");

  useEffect(() => {
    console.log("Effect runs AFTER first render");

    setTimeout(() => {
      setUsers([
         {id: 1, name: "Aira", online: false},
        {id: 2, name: "Marc", online: false},
        {id: 3, name: "Bob", online: true},
        {id: 4, name: "Ced", online: true},
        {id: 5, name: "Laz", online: true}
      ]);
    },2000);
  }, []);

  const allCount = users.length;
  const onlineCount = users.filter(u => u.online).length;
  const offlineCount = users.filter(u => !u.online).length
  const tabs = [
    {id: 1, name: "All User", count: users.length},
    {id: 2, name: "Online", count: onlineCount},
    {id: 3, name: "Offline", count: offlineCount}
  ];

  const summary = [
  { 
    id: 1, 
    text: "Total Users", 
    colors: { bg: "bg-[#ad7f54]", bg1: "bg-[#7B542F]" }, 
    count: allCount 
  },
  { 
    id: 2, 
    text: "Online Now", 
    colors: { bg: "bg-green-300", bg1: "bg-green-500" }, 
    count: onlineCount 
  },
  { 
    id: 3, 
    text: "Offline", 
    colors: { bg: "bg-gray-300", bg1: "bg-gray-500" }, 
    count: offlineCount 
  }
];


  const toggleStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? {...u, online: !u.online} : u))

  };

  const handleTab = (tab) => {
    setActiveTab(tab);
  }

   const filteredUsers = users.filter(user => {
    if (activeTab === "Online") return user.online;
    if (activeTab === "Offline") return !user.online;
    return true; // All User
  });

  return { users, 
           toggleStatus, 
           filteredUsers, 
           tabs, 
           activeTab, 
           handleTab, 
           filteredUsers, 
           allCount, 
           onlineCount, 
           offlineCount,
           summary

   }
}