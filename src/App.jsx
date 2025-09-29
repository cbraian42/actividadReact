import UserCard from "./userCard.jsx";

function App() {
  return (
    <div>
      <h1>Usuarios</h1>
      <UserCard 
        name="María López" 
        email="maria@example.com" 
        age={28} 
        isOnline={true} 
      />
      <UserCard 
        name="Juan Pérez" 
        email="juan@example.com" 
        age={35} 
        isOnline={false} 
      />
    </div>
  );
}

export default App;
