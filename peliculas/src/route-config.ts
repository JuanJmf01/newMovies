import LandingPages from "./LandingPages";

import CrearGenero from "./Generos/Pages/CrearGenero";
import EditarGenero from "./Generos/Pages/EditarGenero";
import IndiceGeneros from "./Generos/Pages/IndiceGenero";

import CrearActor from "./Actores/Pages/CrearActor";
import EditarActor from "./Actores/Pages/EditarActor";
import IndiceActor from "./Actores/Pages/IndiceActor";

import CrearCine from "./Cines/Pages/CrearCine";
import EditarCine from "./Cines/Pages/EditarCine";
import IndiceCine from "./Cines/Pages/IndiceCine";

import IndicePeliculas from "./Peliculas/Pages/IndicePeliculas";
import CrearPelicula from "./Peliculas/Pages/CrearPelicula";
import EditarPelicula from "./Peliculas/Pages/EditarPelicula";


import FiltroPeliculas from "./Peliculas/Pages/FiltroPelicula";
import RedireccionarALanding from "./Utils/RedireccionarALanding";





const rutas = 
[
    {path: '/', componente: LandingPages},

    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos', componente: IndiceGeneros},
    {path: '/generos/editar/:id', componente: EditarGenero},


    {path: '/actores', componente: IndiceActor},
    {path: '/actores/crear', componente: CrearActor},
    {path: '/actores/editar/:id', componente: EditarActor},

    {path: '/cines', componente: IndiceCine},
    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id', componente: EditarCine},

    {path: '/peliculas/filtrar', componente: FiltroPeliculas},

    {path: '/peliculas', componente: IndicePeliculas},
    {path: '/peliculas/crear', componente: CrearPelicula},
    {path: '/peliculas/editar/:id', componente: EditarPelicula},

    //Si cahemos en una ruta no encontrada redireccionamos a p principal
    {path: '*', componente: RedireccionarALanding }
]


export default rutas