using PeliculasApii.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasApii.Entidades
{
    public class Genero: IValidatableObject
    {
        public int Id { get; set; }

        //Campo nombre requerido (Obligatorio)
        [Required(ErrorMessage = "El campo {0} es requerido")]

        //Longitud de string nombre 
        [StringLength(maximumLength: 10)]
        //[PrimeraLetraMayuscula] //Regla de validacion por atributo
        public string Nombre { get; set; }

        [Range(18, 110)]
        public int Edad { get; set; }

        [CreditCard]
        public string TargetaCredito { get; set; }

        [Url]
        public string URL { get; set; }

        //Validacion por modelo se puede aplicar a la vez a todos los atributos que hayan dentro del modelo
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Nombre))
            {
                var primeraLetra = Nombre[0].ToString();
                if(primeraLetra != primeraLetra.ToUpper())
                { 
                    yield return new ValidationResult("La primera letra debe ser mayuscula desde model",
                        new string[] { nameof(Nombre) });
                }
            }
        }
    }
}
 