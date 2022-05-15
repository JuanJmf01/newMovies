import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "../MostrarErrorCampo";

export default function FormGruopText(props: formGroupTextProps) {
    return (
        <div>
            <div className="form-group">
                {/** si label esta presente, mostrar, de lo contrario, no mostrar, ya que label es opcional */}
                {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
                <Field className='form-control'
                    type={props.type}
                    name={props.campo}
                    placeholder={props.placeholder}
                />
                <ErrorMessage name={props.campo}>
                    {mms =>
                        <div> <MostrarErrorCampo mensaje={mms} /></div>} 
                </ErrorMessage>
            </div>
        </div>
    )

}

interface formGroupTextProps {
    campo: string;
    type: string
    label?: string
    placeholder?: string
}


