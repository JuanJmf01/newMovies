import { Field, Form, Formik } from "formik"
import { generoDTO } from '../../Generos/generos.model'

import Button from '../../Utils/Button'


export default function FiltroPeliculas() {

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [
        {
            id: 1,
            nombre: 'Accion'
        },
        {
            id: 2,
            nombre: 'comedia'
        }
    ]

    return (
        <div>
            <h3>Filtrar Peliculas</h3>

            <Formik initialValues={valorInicial}

                onSubmit={valores => {
                    console.log(valores)
                }}
            >

                {(formikProps) => (
                    <Form>
                        <div className='form-inline'>
                            <div className="form-group mb-3">
                                <label htmlFor='titulo' className="sr-only">Titulo</label>
                                <input type='text'
                                    className='form-control' id='titulo'
                                    placeholder='titulo de la pelicula'

                                    /**Para que formik funcione con un input type=''text necesitamos pasarle algunas
                                     *propiedades. Por lo general en formik no se utiliza <input/> si no <Field/> */
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('genedoId')}
                                > 
                                    <option value="0">--Seleccione un genero--</option>
                                    {generos.map(genero =>
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className='form-check-input' id='proximosEstreno' name='proximosEstrenos' type='checkbox'/>
                                <label className="fork-check-label" htmlFor="proximosEstrenos">Proximos estrenos</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className='form-check-input' id='enCines' name='enCines' type='checkbox'/>
                                <label className="fork-check-label" htmlFor="enCines">En Cines</label>
                            </div>
                            {/** formikProps.submitForm() ::: es la foma de postear el fomulario
                             * De igual manera podemos utilizar un boton tipo submit si lo preferimos
                            */}
                            <Button 
                            type='button' onClick={()=> formikProps.submitForm()} >Filtrar</Button>

                            {/**formikProps.setValues(valorInicial) limpia el formulario. lo vuelve al valor inicial (valorInicial) */}
                            <Button type='button' className='btn btn-danger' onClick={()=> formikProps.setValues(valorInicial)}>Limpiar</Button>
                        </div>
                    </Form>
                )}


            </Formik>

        </div >
    )
}


interface filtroPeliculasForm {
    titulo: string
    generoId: number
    proximosEstrenos: boolean
    enCines: boolean
}