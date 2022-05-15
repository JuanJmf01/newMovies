import { useParams } from "react-router-dom";
import FormularioGenero from "../FomularioGenero";

export default function EditarGenero() {
    const { id } = useParams();
    return (
        <div>
            <h3>Editar Genero</h3>
            <h4>Mi id es: {id}</h4>

            <FormularioGenero modelo={{nombre: 'Accion', apellido: ''}} 
            onSubmit={async valores =>{
                await new Promise(r => setTimeout(r, 1000))
                console.log(valores)
            }}

            />
            
        </div>
    )
}