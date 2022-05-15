import { Formik, Form, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import Button from "../Utils/Button"
import FormGruopText from "../Utils/FormGroup/FormGroupText"

import * as Yup from 'yup'
import { generoCreacionDTO } from "./generos.model"


export default function FormularioGenero(props: formularioGeneroProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                apellido: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
 
            })}

        >

            {(formikProps) => (
                <Form>
                    <FormGruopText type='text' campo='nombre' label='Name' placeholder='Name' />
                    <FormGruopText type='text' campo='apellido' label='Apellido' placeholder='Apellido' />
                    {/** disabled={formikProps.isSubmitting} : desactivamos el boton enviar mientrar se este ejecutanto onSubmit
                         * onSubmit por lo generar envia los datos a la BD. Se desactiva el boton para 
                         * no permitir enviar 2 o mas veces a la vez el formulario
                         */}
                    <Button disabled={formikProps.isSubmitting} type='submit'>Salvar</Button>
                    <Link className='btn btn-secondary' to='/generos'>Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioGeneroProps {
    modelo: generoCreacionDTO
    //onSubmit: recibe valores y acciones, donde accion es un segundo parametro 
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void
}