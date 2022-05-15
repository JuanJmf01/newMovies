//UseNavigate me permite redireccionar la pagina despues de darle click a un boton
import { useNavigate } from "react-router-dom"

import '../css/formularioGenero.css'
import FormularioGenero from "../FomularioGenero"

export default function CrearGenero() {
    //useNavigate: cuando precione el boton me redirecciona a otra parte
    const navigate = useNavigate()
    return (
        <>
            <h3>Crear Genero</h3>

            <FormularioGenero modelo={{ 
                nombre: '',
                apellido: '' 
            }}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 1000))
                    console.log(valores)
                }}

            />


        </>
    )
}