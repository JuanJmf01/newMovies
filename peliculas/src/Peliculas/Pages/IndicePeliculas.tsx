import { Link } from "react-router-dom";

export default function IndicePeliculas(){
    return(
        <div>
            <h2>Indice peliculas</h2>
            <Link to='/peliculas/crear' >Crear Pelicula</Link>
            <Link to='/peliculas/editar' >Editar Pelicula</Link>
        </div>
    )
}