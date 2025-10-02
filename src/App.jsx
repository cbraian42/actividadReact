import React from "react";
import UserCard from "./userCard.jsx";
import Producto from "./producto.jsx";
import Counter from "./contador.jsx";
import TodoList from "./todolist.jsx";
import PanelUsuarios from "./ej5.jsx";
import TaskList from "./lista.jsx"


function App() {
  return (
    <div>
      <PanelUsuarios />
      <TaskList />

      <Counter />
      <TodoList />
      
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



      <h1>Catálogo de Productos</h1>
      <Producto 
        name="Auriculares Bluetooth" 
        price={59.99} 
        discount={20} 
        category="Electrónica" 
      />

      <Producto 
        name="Camiseta Deportiva" 
        price={25} 
        category="Ropa" 
      />

      <Producto 
        name="Portátil Gamer" 
        price={1200} 
        discount={15} 
        category="Informática" 
      />
    </div>

    

  );
}

export default App;
