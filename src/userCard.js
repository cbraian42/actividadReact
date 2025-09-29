let name = String;
let age = Number;
let email = String;
isOnline = Boolean;



function UserCard({ name, age, email, isOnline }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default UserCard;