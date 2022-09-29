import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function About() {
  const [equipo, setEquipo] = useState([]);

  // como conectarnos a una api.
  const obtenerDatos = async () => {
    const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
    const users = await data.json();
    setEquipo(users.civilizations );
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Usuarios</h1>

      <ul className="list-[upper-roman]">
        {equipo.map((item) => (
          <li key={item.id} className="last:pb-0" >
            <Link to={`/about/${item.id}`} className="text-blue-600 visited:text-purple-600">
              {item.name} - {item.expansion}
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
