export default function Task({ task, onToggle }) {
  return (
    <div>
      <span onClick={() => onToggle(task.id)} className={`cursor-pointer ${task.done ? 'line-through' : 'none'}`}>{task.name}</span>
      <p>{task.description}</p>
    </div>
  );
}
