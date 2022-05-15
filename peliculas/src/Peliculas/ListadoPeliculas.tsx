import { pelicula } from './peliculas.model'
import PeliculaIndividual from './peliculaIndividual'
import ListadoGenerico from './../Utils/ListadoGenerico'
import './css/ListadoPeliculas.css'

export default function ListadoPeliculas(props: listadoPeliculasProps) {
    return (
        <ListadoGenerico listado={props.peliculas}>
            <div className='rows'>
                {props.peliculas?.map(pelicula =>
                    <PeliculaIndividual pelicula={pelicula}
                        key={pelicula.id}
                    />)}
            </div>
        </ListadoGenerico>

    )
}

interface listadoPeliculasProps {
    peliculas?: pelicula[]
}