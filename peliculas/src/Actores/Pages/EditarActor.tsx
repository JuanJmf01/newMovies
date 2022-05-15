import FormularioActores from "../FormularioActores"

export default function EditarActor() {
    return (
        <div>
            <h3>Editar Actor</h3>
            <FormularioActores
                modelo={{
                    nombre: 'Cillian Murphy',
                    fechaNacimiento: new Date('1978-07-03T00:00:00'),
                    fotoURL: 'https://fotos02.noticiasdenavarra.com/2021/10/21/328x206/oppenheimer.jpg',
                    biografia: `# Cillian 
                    is a **Actor** from`
                }}

                onSubmit={valores => {
                    console.log(valores)
                }}


            />
        </div>
    )
}