using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly ApplicationDbContext context;

        public GenerosController(ILogger<GenerosController> logger,
            ApplicationDbContext context) // ,ApplicationDbContext context. Agregar despues de update-database. finlamente crear y asignar como campo context: ctrl . in up context
        {
            this.logger = logger;
            this.context = context;
        }


        //Podemos definir multiples endPoinds por accion:
        [HttpGet]
        //Acciones. Responden cuando se le haga una peticion http al endPoind
        public async Task<ActionResult<List<Genero>>> Get()
        {
            return await context.Generos.ToListAsync();
        }


        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Genero genero)
        {
            context.Add(genero);
            await context.SaveChangesAsync();
            return NoContent();
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


