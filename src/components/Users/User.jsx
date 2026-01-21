import useUsers from "../../hooks/useUsers";
import UserList from "./UserList";

export default function User() {
  const { users, onlineCount, offlineCount, toggleStatus } = useUsers();

  return (
    <>
      <UserList
        users={users}
        onToggle={toggleStatus}
        online={onlineCount}
        offline={offlineCount}
      />
    </>
  );
}
