let id = Integer;
let title = String;
let completed = Boolean;

function TaskCard({ id, title, completed }) {
  return (
    <div className="task-card">
      <h3>Task ID: {id}</h3>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TaskCard;