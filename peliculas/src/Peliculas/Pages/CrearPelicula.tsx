import { cineDTO } from "../../Cines/cines.model";
import { generoDTO } from "../../Generos/generos.model";
import FormularioPeliculas from "../FormularioPeliculas";

export default function CrearPelicula() {

    const generos: generoDTO[] = [
        {
            id: 1,
            nombre: 'Accion'
        },
        {
            id: 2,
            nombre: 'Drama'
        },
        {
            id: 3,
            nombre: 'Comedia'
        }
    ]

    const cines: cineDTO[] = [
        {
            id: 1,
            nombre: 'agora'
        },
        {
            id: 2,
            nombre: 'Molinos'
        }
    ]

    return (
        < div >
            <h3>Crear Peliculas</h3>
            <FormularioPeliculas
                actoresSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{
                    titulo: '', enCines: true, trailer: '',
                    fechaLanzamiento: new Date('')
                }}
                onSubmit={valores => console.log(valores)}
            />
        </div >
    )
}