using System.ComponentModel.DataAnnotations;

namespace PeliculasApii.Entidades
{
    public class Genero
    {
        public int Id { get; set; }

        //Campo nombre requerido (Obligatorio)
        [Required(ErrorMessage = "El campo {0} es requerido")]

        //Longitud de string nombre 
        [StringLength(maximumLength: 50)]
        //[PrimeraLetraMayuscula] //Regla de validacion por atributo
        public string Nombre { get; set; }

        
    }
}
 