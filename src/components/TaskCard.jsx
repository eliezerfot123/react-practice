import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize">{task.title}</h3>
      <h5 className="text-gray-500 text-sm">{task.description}</h5>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={(e) => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
