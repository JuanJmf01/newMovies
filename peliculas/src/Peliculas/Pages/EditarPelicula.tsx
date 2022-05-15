import { actorPeliculaDTO } from "../../Actores/actores.model";
import { cineDTO } from "../../Cines/cines.model";
import { generoDTO } from "../../Generos/generos.model";
import FormularioPleiculas from "../FormularioPeliculas";

export default function EditarPelicula() {

    const generosNoSeleccionados: generoDTO[] = [
        {
            id: 2,
            nombre: 'Drama'
        }

    ]

    const generosSeleccionados: generoDTO[] = [
        {
            id: 1,
            nombre: 'Accion'
        },
        {
            id: 3,
            nombre: 'Comedia'
        }

    ]


    const cinesSeleccionados: cineDTO[] = [
        {
            id: 2,
            nombre: 'Holiwoooood'
        }
    ]

    const cinesNoSeleccionados: cineDTO[] = [
        {
            id: 1,
            nombre: 'agora'
        }
    ]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: 'Giovanni',
            personaje: 'El zarco',
            foto: ''
        }
    ]


    return (
        < div >
            <h3>Editar Peliculas</h3>
            <FormularioPleiculas
                actoresSeleccionados={actoresSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{
                    titulo: 'Avengers',
                    enCines: true,
                    trailer: 'url',
                    fechaLanzamiento: new Date('2021-06-06T00:00:00')
                }}
                onSubmit={valores => console.log(valores)}

            />
        </div >
    )
}