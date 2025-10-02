import React, { useState } from 'react';

//Inicio de datos//
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', estado: 'completada' },
  { id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
  { id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
];

const TaskList = () => {
  // Estado para iniciar las tareas//
  const [tareas, setTareas] = useState(tareasIniciales);

  // Función para obtener el icono según el estado (usa ternarios anidados)
  const getIcono = (estado) => {
    return estado === 'completada' ? '✓' :
           estado === 'en progreso' ? '⏳' :
           '⏱'; // Por defecto//
  };

  // Función para ver el estado//
  const getColor = (estado) => {
    return estado === 'completada' ? 'green' :
           estado === 'en progreso' ? 'orange' :
           'gray'; // Por defecto para 'pendiente'
  };

  // Función para contar tareas por estado
  const contarPorEstado = (estado) => {
    return tareas.filter(tarea => tarea.estado === estado).length;
  };

  //  Mensaje si no hay tareas
  const renderLista = () => {
    if (tareas.length === 0) {
      return <p style={{ textAlign: 'center', color: 'gray' }}>No hay tareas pendientes</p>;
    }

    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li
            key={tarea.id} 
            style={{
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              color: getColor(tarea.estado)
            }}
          >
            <span style={{ fontSize: '20px', marginRight: '10px' }}>
              {getIcono(tarea.estado)} {}
            </span>
            <strong>{tarea.texto}</strong> - Estado: {tarea.estado}
          </li>
        ))}
      </ul>
    );
  };

  //  Solo se muestran si hay tareas
  const renderEstadisticas = () => {
    if (tareas.length === 0) return null;
    return (
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
        <h3>Estadísticas:</h3>
        <p>Completadas: {contarPorEstado('completada')}</p>
        <p>En progreso: {contarPorEstado('en progreso')}</p>
        <p>Pendientes: {contarPorEstado('pendiente')}</p>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Lista de Tareas</h1>
      {renderLista()} {}
      {tareas.length > 0 && renderEstadisticas()} {}
    </div>
  );
};

export default TaskList;
