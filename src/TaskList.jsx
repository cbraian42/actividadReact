/* Componente Lista de Tareas
Enunciado:
Crea un componente TaskList que reciba un array de tareas como prop. Cada tarea debe ser
un objeto con:
● id (number)
● title (string)
● completed (boolean)
El componente debe mostrar cada tarea con un check indicando si está completada o no */
import React from 'react';
import "./MisComponentes.css";

function TaskList({ tasks = [] }) {
  return (
    <div className="TaskList">
      <h2>Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <input type="checkbox" checked={task.completed} readOnly />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;