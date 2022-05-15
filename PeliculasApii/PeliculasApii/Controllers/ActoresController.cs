using Microsoft.AspNetCore.Mvc;
using PeliculasApii.Repositorios;
using PeliculasApii.Entidades;

namespace PeliculasApii.Controllers
{
    [Route("api/actores")]
    public class ActoresController : ControllerBase
    {
        private readonly IRepositorio repositorio;
        private readonly WeatherForecastController weatherForecastController; // ** 5

        public ActoresController(IRepositorio repositorio, WeatherForecastController weatherForecastController) // ** 5
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController; // ** 5
        }

        [HttpGet("actores")]
        [HttpGet]
        public List<Actores> Get()
        {
            return repositorio.ObtenerTodosLosActores();
        }


        //** 3
        [HttpGet("GuidAct")]    
        public ActionResult<Guid> GetGuidAct()
        {
            // ** 3
            //return repositorio.ObtenerGuid();

            //** 7
            return Ok(new
            {
                Guid_ActoresController = repositorio.ObtenerGuid(),
                Guid_WeatherForecastController = weatherForecastController.ObtenerGUIDWeatherForecastController()
            });
        }



        [HttpGet("/actoresInf")]
        [HttpGet("{Id:int}/{nombre=undefined}")] // api/generos/id/nombre ==> api/generos/2/andres y valor por defecto = undefined.(no necesario)
        public async Task <ActionResult<Actores>> Get(int Id, string nombre)
        {
            var actores = await repositorio.ObtenerActPorId(Id);

            if (actores == null)
            {
                return NoContent();
            }

            return actores;
        }

        [HttpPost]
        public ActionResult Post([FromBody]Actores actores)
        {
            // ** 9
            repositorio.CrearActor(actores);
            return NoContent();
        }


        [HttpPut]
        public ActionResult Put([FromBody]Actores actores)
        {
            return NotFound();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NotFound();
        }

    }
}
