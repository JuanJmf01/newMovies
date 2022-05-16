using Microsoft.AspNetCore.Mvc;
using PeliculasApii.Entidades;


namespace PeliculasApii.Controllers
{
    //endPoind
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : ControllerBase //Heradamos la clase ControllerBase para tener acceso a ciertos metodos auxiliares
    {
        //Asinacion como campo (WeatherForecastController. GenerosController, etc)

        private readonly ILogger<GenerosController> logger;

        public GenerosController(
            ILogger<GenerosController> logger)
        {
            this.logger = logger;
        }


        //Podemos definir multiples endPoinds por accion ej:
        [HttpGet]
        //Acciones. Responden cuando se le haga una peticion http al endPoind
        public ActionResult<List<Genero>> Get()
        {
            return new List<Genero> { new Genero() { Id = 1, Nombre = "Comedia" } };
        }


        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }


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


