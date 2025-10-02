import React, { useState, useMemo } from "react";

const usuarios = [
  { id: 1, nombre: "Carlos López", rol: "admin", activo: true, ultimaConexion: "2024-01-15" },
  { id: 2, nombre: "María García", rol: "editor", activo: false, ultimaConexion: "2024-02-02" },
  { id: 3, nombre: "Luis Torres", rol: "usuario", activo: true, ultimaConexion: "2024-02-15" },
  { id: 4, nombre: "Ana Pérez", rol: "usuario", activo: false, ultimaConexion: "2024-02-25" },
];

// Funciones de permisos reutilizables
const puedeEditar = (rol) => rol === "admin" || rol === "editor";
const puedeEliminar = (miRol, usuarioRol) => miRol === "admin" && usuarioRol !== "admin";
const puedeCambiarRol = (usuarioRol) => usuarioRol !== "admin";

export default function PanelUsuarios() {
  const [filtroRol, setFiltroRol] = useState("todos");
  const [soloActivos, setSoloActivos] = useState(false);

  // Filtrado combinado
  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((u) =>
      (filtroRol === "todos" || u.rol === filtroRol) &&
      (!soloActivos || u.activo)
    );
  }, [filtroRol, soloActivos]);

  // Estadísticas dinámicas
  const total = usuarios.length;
  const activos = usuarios.filter((u) => u.activo).length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Panel de Control de Usuarios</h1>

      {/* Filtros */}
      <div style={{ marginBottom: "15px" }}>
        <label>
          Rol:{" "}
          <select value={filtroRol} onChange={(e) => setFiltroRol(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="usuario">Usuario</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="checkbox"
            checked={soloActivos}
            onChange={() => setSoloActivos(!soloActivos)}
          />
          Solo activos
        </label>
      </div>

      {/* Tabla */}
      {usuariosFiltrados.length === 0 ? (
        <p style={{ fontStyle: "italic", color: "gray" }}>No hay resultados.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Última Conexión</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((u) => (
              <tr key={u.id}>
                <td>{u.nombre}</td>

                {/* Badge de rol con ternario */}
                <td
                  style={{
                    fontWeight: "bold",
                    color:
                      u.rol === "admin"
                        ? "red"
                        : u.rol === "editor"
                        ? "blue"
                        : "green",
                  }}
                >
                  {u.rol}
                </td>

                {/* Estado */}
                <td>{u.activo ? "🟢 Conectado" : "🔴 Desconectado"}</td>
                <td>{u.ultimaConexion}</td>

                {/* Acciones */}
                <td>
                  {puedeEditar(u.rol) && (
                    <button style={{ marginRight: "5px" }}>Editar</button>
                  )}
                  {puedeCambiarRol(u.rol) && (
                    <button style={{ marginRight: "5px" }}>Cambiar Rol</button>
                  )}
                  {puedeEliminar("admin", u.rol) && (
                    <button style={{ marginRight: "5px" }}>Eliminar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Resumen */}
      <div style={{ marginTop: "20px", padding: "10px" }}>
        <p>Total de usuarios: {total}</p>
        <p>Usuarios activos: {activos}</p>
      </div>
    </div>
  );
}
