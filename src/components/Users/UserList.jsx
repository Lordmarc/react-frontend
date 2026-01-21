
import UserItem from "./UserItem";
export default function UserList({ onToggle, filtered}){


  return (

    <div className="flex flex-col gap-4 py-4 overflow-y-auto max-h-96">
      {filtered.map(u => (
        <UserItem key={u.id} user={u} onToggle={onToggle}/>
      ))}

    </div>
  );
}