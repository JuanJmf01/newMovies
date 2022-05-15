import { Link } from "react-router-dom";

export default function IndiceCine(){
    return(
        <div>
            <h3>Indice Cines</h3>
            <Link to='/cines/crear'>Crear Cine</Link>
            <Link to='/cines/editar'>Editar Cine</Link>
        </div>
    )
}