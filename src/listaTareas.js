//El componente debe mostrar cada tarea con un check indicando si está completada o no.


import './tarea.js';
import React, { useState } from 'react';

const [tareas, setTareas] = useState([]);

const tareaCompletada = () =>  {
    setTareas(!tareas.tareaCompletada);

} 

function ListaTareas() {
  return (
    <div className="lista-tareas">
      <h2>Task List</h2>
      <ul>  
        {tareas.map((tarea) => (
            <li key={tarea.id}>
            if (tarea.completada === true) {
                <h2 className='completed'>{tarea.nombre}</h2>
            }
            else <h2 className='checkbox'>{tarea.nombre}</h2>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
