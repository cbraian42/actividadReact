import "./MisComponentes.css";

function UserCard({ name, email, age, isOnline }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <h2>{name}</h2>
        <span className={isOnline ? "online" : "offline"}>
          ●
        </span>
      </div>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
    </div>
  );
}

export default UserCard;
