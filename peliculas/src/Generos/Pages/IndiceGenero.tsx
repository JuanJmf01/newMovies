import { Link } from "react-router-dom";

export default function IndiceGeneros(){
    return(
        <div>
            <h3>Indice Generos</h3>
            <Link to='/generos/crear'>Crear genero</Link>
            <Link to='/generos/editar'>Editar genero</Link>
        </div>
    )
}