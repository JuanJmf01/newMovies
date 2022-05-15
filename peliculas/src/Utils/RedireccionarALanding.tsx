import { Navigate } from "react-router-dom";

export default function RedireccionarALanding(){
    //Si cahemos en una ruta no encontrada redireccionamos a p principal
    return <Navigate to={{pathname: '/'}} />
}