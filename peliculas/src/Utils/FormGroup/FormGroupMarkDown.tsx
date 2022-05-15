import { Field, useFormikContext } from "formik"
import ReactMarkdown from "react-markdown"

import '.././css/formGroupMarkDown.css'

export default function FormGroupMarkDown(props: propsGroupMarkDown){

    const {values} = useFormikContext<any>()
    return(
        <div>
            <div className="form-group form-markdown">
                <div>
                    <label>{props.label}</label>
                    <div>
                        <Field name={props.campo} as='textarea' className='form-textarea' />
                    </div>
                </div>
                <div>
                    <label>{props.label} (preview):</label>
                    <div className="markdown-container">
                        <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface propsGroupMarkDown{
    campo: string
    label: string
}