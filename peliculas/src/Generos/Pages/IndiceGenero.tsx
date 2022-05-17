import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlGeneros } from "../../Utils/endpoints";
import { generoDTO } from "../generos.model";

export default function IndiceGeneros() {

    useEffect(() => {
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                console.log(respuesta.data)
            })
    }, [])

    return (
        <div>
            <h3>Indice Generos</h3>
            <Link to='/generos/crear'>Crear genero</Link>
            <Link to='/generos/editar'>Editar genero</Link>
        </div>
    )
}