import Footer from "./components/Users/Footer";
import Header from "./components/Users/Header";
import LiveSummary from "./components/Users/LiveSummary";
import Navbar from "./components/Users/Navbar";
import UserList from "./components/Users/UserList";
import UserTab from "./components/Users/UserTab";
import useUsers from "./hooks/useUsers";

export default function App() {
  const {
    users,
    tabs,
    allCount,
    onlineCount,
    offlineCount,
    handleTab,
    activeTab,
    filteredUsers,
    toggleStatus,
    label,
    summary
  } = useUsers();

  console.log("summary ",summary)
  return (
    <div className="min-h-screen w-full bg-[#f5efef] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col h-auto w-full p-8">
        <Header />
        <div className="flex-1 flex gap-8">
          <div className="flex-1">
            <UserTab
              tabs={tabs}
              activeTab={activeTab}
              onActive={handleTab}
              label={label}
              filteredUsers={filteredUsers}
            />
            <UserList
              users={users}
              onToggle={toggleStatus}
              filtered={filteredUsers}
            />
          </div>
          <LiveSummary summary={summary}/>

        </div>
      </div>
      <Footer/>
    </div>
  );
}
