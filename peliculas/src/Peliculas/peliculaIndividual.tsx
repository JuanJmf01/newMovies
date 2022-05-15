import { pelicula } from "./peliculas.model";
import './css/PeliculaIndividual.css'

export default function PeliculaIndividual(props: peliculaIndividualProps){

    const construirLink = () => `/pelicula/${props.pelicula.id}`
    return (
        <div className='component'>
            <a href={construirLink()}>
                <img src={props.pelicula.imagen} alt="Poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula;
}