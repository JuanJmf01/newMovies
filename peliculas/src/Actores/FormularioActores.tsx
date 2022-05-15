import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGruopText from "../Utils/FormGroup/FormGroupText";
import { actorCreacionDTO } from "./actores.model";

import * as Yup from 'yup'
import FormGroupFecha from "../Utils/FormGroup/FormGroupFecha";
import FormGroupImage from "../Utils/FormGroup/FormGroupImage";
import FormGroupMarkDown from "../Utils/FormGroup/FormGroupMarkDown";

export default function FormularioActores(props: formularioActoresProps){
    return(
        <div>
            <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}

            >

                {(formikProps) =>(
                    <Form>
                        <FormGruopText campo='nombre' type='text' label='Nombre' placeholder="Nombre Actor" />
                        <FormGroupFecha campo='fechaNacimiento' label='Fecha Nacimiento' />
                        <FormGroupImage campo='foto' label='Foto' imagenURL="https://fotos02.noticiasdenavarra.com/2021/10/21/328x206/oppenheimer.jpg" />
                        <FormGroupMarkDown campo='biografia' label='Biografia' />

                        <Button disabled={formikProps.isSubmitting} type='submit' >Salvar</Button>
                        <Link className='btn btn-secondary' to='/actores'>Cancelar</Link>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void
}