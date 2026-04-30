import { useState } from "react";

const ListaTareas = () => {
  const [tareas, setTareas] = useState(["Estudiar", "Programar", "Dormir"]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminar = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">📝 Lista de Tareas</h1>

      {/* INPUT + BOTÓN */}
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />

        <button className="btn btn-success" onClick={agregarTarea}>
          Agregar
        </button>
      </div>

      {/* LISTA */}
      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {tarea}

            <button
              onClick={() => eliminar(index)}
              className="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
