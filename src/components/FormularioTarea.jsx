import React, { useState, useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "../components/Alerta";

const PRIORIDAD = ["Baja", "Media", "Alta"];

const FormularioTarea = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const {
    modalFormularioTarea,
    handleModalTareas,
    mostrarAlerta,
    alerta,
    submitTarea,
  } = useProyectos();

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Submit");
    // if ([nombre, descripcion, prioridad].includes("")) {
    //   mostrarAlerta({ msg: "Todos los campos son obligatorios", error: true });
    //   return;
    // }
    // submitTarea({ nombre, descripcion, prioridad });
  };

  const { msg } = alerta;
  return (
    <>
      {" "}
      <form className="my-10" onSubmit={test}>
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Nombre Tarea
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre de la Tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Descripción Tarea
          </label>
          <textarea
            id="descripcion"
            placeholder="Descripción de la Tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="prioridad"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Prioridad
          </label>
          <select
            type="text"
            id="prioridad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="">-- Seleccionar --</option>
            {PRIORIDAD.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded text-sm"
          value="Crear Tarea"
        />
      </form>
    </>
  );
};

export default FormularioTarea;
