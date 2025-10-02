import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, { text: taskInput }]);
      setTaskInput('');
    }
  };

  const completeAndDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Nueva tarea" 
      />
      <button onClick={addTask}>Agregar</button>
      <h2>Tareas pendientes: {tasks.length}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => completeAndDeleteTask(index)}>Completar y Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;