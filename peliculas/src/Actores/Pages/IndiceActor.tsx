import { Link } from "react-router-dom";

export default function IndiceActor(){
    return(
        <div>
            <h3>Indice actores</h3>
            <Link to='/actores/crear'>Crear Actor</Link>
            <Link to='/actores/editar'>Editar Actor</Link>
        </div>
    )
}