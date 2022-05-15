import { useState, useEffect } from "react";
import { landingPageDTO } from './Peliculas/peliculas.model'
import ListadoPeliculas from './Peliculas/ListadoPeliculas'

/**-------------------IMAGES--------------------- */





/**-------------------IMAGES--------------------- */


export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, 
                        titulo: 'Spider-Man: Far from Home',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    },
                    {
                        id: 2, 
                        titulo: 'Moana',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    }
                ],
                proximosEstrenos: [
                    {
                        id: 3, 
                        titulo: 'Soul',
                        imagen: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    }
                ]
            })
        }, 500);

        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}