import React from 'react';
import UserCard from "./userCard.jsx";
import TaskList from "./TaskList.jsx";
import Producto from "./producto.jsx";
import TodoList from './TodoList.jsx';
import Counter from "./contador.jsx";

function App() {
  return (
    <div>
      <Counter />
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
  

      <TaskList 
        tasks={[
          { id: 1, title: "Comprar leche", completed: false },
          { id: 2, title: "Estudiar React", completed: true },
          { id: 3, title: "Hacer ejercicio", completed: false },
        ]}
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
      <div>
      <TodoList />
      </div>
    </div>

    

  );
}

export default App;
