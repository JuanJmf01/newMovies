/** Este componente 'Button' se utiliza para siempre tener el mismo compoennte en caso de que 
 * necesitemos el mismo simultaneas veces en este caso un botton
 */

export default function Button(props: buttonProps) {
    return (
        <button type={props.type} className={props.className} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode,
    onClick?(): void
    type: 'button' | 'submit'
    disabled: boolean //It´s false boolean. Look botton in defaultProps
    className: string
}


Button.defaultProps ={
    type: 'button',
    disabled: false, //False por defecto
    className: 'btn btn-primary'
}