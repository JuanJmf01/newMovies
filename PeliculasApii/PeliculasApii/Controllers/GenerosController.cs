using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PeliculasApii.Entidades;
using PeliculasApii.Filters;
using PeliculasApii.Repositorios;

namespace PeliculasApii.Controllers
{
    //endPoind
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : ControllerBase //Heradamos la clase ControllerBase para tener acceso a ciertos metodos auxiliares
    {
        //Asinacion como campo (WeatherForecastController. GenerosController, etc)
        private readonly IRepositorio repositorio;


        private readonly WeatherForecastController weatherForecastController;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(IRepositorio repositorio,
            WeatherForecastController weatherForecastController,
            ILogger<GenerosController> logger)
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController;
            this.logger = logger;
        }


        //Podemos definir multiples endPoinds por accion ej:
        [HttpGet]
        [HttpGet("listado")] // api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        //[ResponseCache(Duration = 60)]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ServiceFilter(typeof(MiFiltroDeAccion))]
        //Acciones. Responden cuando se le haga una peticion http al endPoind
        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.ObtenerTodosLosGeneros();
        }



        //*
        // 
        [HttpGet("guid")] // api/generos/guid
        public ActionResult<Guid> GetGuid()
        {
            return Ok(new
            {
                Guid_GenerosController = repositorio.ObtenerGuid(),
                Guid_WeatherForecastController = weatherForecastController.ObtenerGUIDWeatherForecastController()
            });
        }




        //Concatenamos api/genero/example. ya que arriba tenemos tambien [HttpGet]
        [HttpGet("{Id:int}")]
        //ActionResult: Ya que queremos retornar o un genero o un tipo de dato que heredade ActionResult por ej: NotFound() (error 404)
        //BindRequired: hacemos obligatorio el envio del parametro nombre. provoca un error (ModelState.IsValid)
        public async Task<ActionResult<Genero>> Get(int Id, [FromHeader] string nombre)
        {
            /*No necesario.. Tenemos validaciones creadas
             * ModelState: Indica si las reglas de validacion han sido respetadas
            if (!ModelState.IsValid)
            {
               return BadRequest(ModelState); //Error 400, indica que reglas de validacion no se han cumplido en caso de que no
            }
            */

            logger.LogDebug($"Obteniendo un genero por el id {Id}");

            var genero = await repositorio.ObtenerGenPorId(Id);
            if (genero == null)
            {
                throw new ApplicationException($"El fenero de ID {Id} no fue encontrado");
                logger.LogWarning($"No pudimos encontrar el genero de Id {Id}");
                return NotFound(); //Error 404
            }

            return genero;
        }



        // ** 9
        //Post: normalmente: Crear nuevos registros
        [HttpPost]
        //public void Post() ==> como necesitamos un NoContent de ActionResult: public ActionResult... (No necesario colocar void)
        public ActionResult Post([FromBody] Genero genero)
        {
            repositorio.CrearGenero(genero);
            return NoContent();
        }


        //PuT: normalmente: Actualizar registros ya existentes
        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            return NoContent();
        }   



        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }

    }
}


