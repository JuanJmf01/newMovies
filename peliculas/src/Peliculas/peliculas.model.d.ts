export interface pelicula{
    id: number;
    titulo: string;
    imagen: string;
}

export interface peliculaCreacionDTO{
    titulo: string
    enCines: boolean
    trailer: string
    fechaLanzamiento?: Date
    poster?: File
    posterURL?: string

    generosIds?: number[]
    cinesIds?: number[]
    actores?: actorPelicula[]
}

export interface landingPageDTO {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}