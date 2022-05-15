import { actorPeliculaDTO } from "./actores.model"
import { Typeahead } from 'react-bootstrap-typeahead'
import { ReactElement } from "react-markdown/lib/react-markdown"
import { useState } from "react"

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: 'Giovanni',
            personaje: 'El zarco',
            foto: ''
        },
        {
            id: 2,
            nombre: 'Anderson',
            personaje: 'mohico',
            foto: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg'
        }

    ]

    const seleccion: actorPeliculaDTO[] = []
    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined)

    function manejarDragStart(actor: actorPeliculaDTO) {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO) {
        if (!elementoArrastrado) {
            return;
        }
        if (actor.id !== elementoArrastrado.id) {
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id)
            const actorIndice = props.actores.findIndex(x => x.id === actor.id)

            const actores = [...props.actores]
            actores[actorIndice] = elementoArrastrado
            actores[elementoArrastradoIndice] = actor
            props.onAdd(actores)
        }
    }

    return (
        <div>
            <label>Actores</label>
            {/**Typeahead: buscador dinamico */}
            <Typeahead
                id='typeahead'
                onChange={actor => {
                    if (props.actores.findIndex(x => x.id === actor[0].id) === -1) {
                        props.onAdd([...props.actores, actor[0]])

                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder='Escriba el nompre del actor..'
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen actor" style={{
                            height: '64px',
                            marginRight: '10px',
                            width: '64px'
                        }} />
                        <span>{actor.nombre}</span>
                    </>
                )}

            />
            <ul className='list-group'>
                {props.actores.map(actor =>
                    <li draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item list-group-item.action"
                        key={actor.id}>
                        {props.listadoUI(actor)} {/**any */}
                        <button className='badge badge-primary badge-pill pointer'
                            style={{ marginLeft: '0.5rem', background: '#1099' }}
                            onClick={() => props.onRemove(actor)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[]
    onAdd(actores: actorPeliculaDTO[]): void
    listadoUI(actor: actorPeliculaDTO): ReactElement
    onRemove(actor: actorPeliculaDTO): void
}