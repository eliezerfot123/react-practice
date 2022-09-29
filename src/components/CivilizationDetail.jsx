import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function CivilizationDetail() {
  //con userParams obtenemos nuestro id
  const {id} = useParams()
  const [pueblo, setPueblo] = useState([]);

  // como conectarnos a una api.
  const obtenerDatos = async () => {
    const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
    const civ = await data.json();
    setPueblo(civ);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return <div>
    <Navbar />
    <h3>
        { pueblo.name}
    </h3>
    <p>  {pueblo.team_bonus}</p>
  </div>;
}
