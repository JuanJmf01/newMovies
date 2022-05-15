export default function MostrarErrorCampo(props: MostrarErrorCampoProps) {
    return (
        <div>
            <div className="text-danger">{props.mensaje}</div>
        </div>
    )
}

interface MostrarErrorCampoProps {
    mensaje: string
}