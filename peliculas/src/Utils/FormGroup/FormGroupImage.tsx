import { useFormikContext } from "formik"
import { ChangeEvent, useState } from "react"

export default function FormGroupImage(props:FormGroupImageProps){

    const divStyled = {marginTop: '10px'}
    const imgStyled = {width: '450px'}

    const [imagenBase64, setImagenBase64] = useState('')
    const [imagenURL, setImagenURL] = useState(props.imagenURL)
    const {values} = useFormikContext<any>()

    const ManejarOnchange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0]
            aBase64(archivo)
            .then((representacionBase64: string) => setImagenBase64(representacionBase64))
            .catch(error => console.log(error))

            values[props.campo] = archivo
            setImagenURL('')

        
        }

    }

    const aBase64 = (file: File) =>{
        return new Promise<string>((resolve, reject) =>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error)

        })
    }
    
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type='file' accept='.jpg, .jpeg, .png' onChange={ManejarOnchange} />
            </div>
            {imagenBase64 ? 
            <div>
                <div style={divStyled}>
                    <img style={imgStyled} src={imagenBase64} alt='imagen seleccionada' />
                </div>
            </div> : null
            }
            {imagenURL ? 
            <div>
                <div style={divStyled}>
                    <img style={imgStyled} src={imagenURL} alt='imagen seleccionada' />
                </div>
            </div> : null
            }
        </div>
    )
}

interface FormGroupImageProps{
    campo: string
    label: string
    imagenURL: string
}

FormGroupImage.defaultProps ={
    imagenURL: ''
}