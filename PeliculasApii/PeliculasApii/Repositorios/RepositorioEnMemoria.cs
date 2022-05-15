using PeliculasApii.Entidades;

namespace PeliculasApii.Repositorios
{
    public class RepositorioEnMemoria : IRepositorio
    {
        //Se crea un arreglo llamado '_generos'
        private List<Genero> _generos;
        private List<Actores> _actor;
         
        public RepositorioEnMemoria(ILogger<RepositorioEnMemoria> logger)
        {
            //Llenamos es arreglo '_generos' con los siguientes datos
            _generos = new List<Genero>()
            {
                new Genero(){ Id = 1, Nombre = "Comedia" },
                new Genero(){ Id = 2, Nombre = "Aventura" },
                new Genero(){ Id = 3, Nombre = "Accion" }
            };


            _actor = new List<Actores>()
            {
                new Actores(){Id = 1, NombreActor = "Cardona", EdadActor = 23},
                new Actores(){Id = 2, NombreActor = "Leonardo", EdadActor = 28}
            };


            // **1
            _guid = Guid.NewGuid(); //123456-SDFRSDV-SREVSDF23-KWHJFDCSDI

        }
        // **1
        public Guid _guid;




       
        //Retornamos el arreglo generos
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        public List<Actores> ObtenerTodosLosActores()
        {
            return _actor;
        }

        public async Task<Genero> ObtenerGenPorId(int Id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));

            return _generos.FirstOrDefault(x => x.Id == Id);
        }

        public async Task <Actores> ObtenerActPorId(int Id)
        {
            await Task.Delay(1);

            return _actor.FirstOrDefault(x => x.Id == Id);
        }



        // ** 2
        public Guid ObtenerGuid()
        {
            return _guid;
        }


        // ** 8
        public void CrearGenero(Genero genero)
        {
             genero.Id = _generos.Count() + 1;
            _generos.Add(genero);
        }

        // ** 8
        public void CrearActor(Actores actor)
        {
             actor.Id = _generos.Count() + 1;
            _actor.Add(actor);
        }

    }
}
