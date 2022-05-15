import FormularioCines from "../FormularioCines"

export default function EditarCine() {
    return (
        <>
            <h3>Editar cine</h3>
            <FormularioCines
                modelo={{nombre: 'MedalloPp', latitud: 6.243734655040644, longitud: -75.57352066127352}}
                onSubmit={valores => console.log(valores)}
            />
        </>

    )
}