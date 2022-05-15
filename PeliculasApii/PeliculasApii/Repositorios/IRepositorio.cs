using PeliculasApii.Entidades;

namespace PeliculasApii.Repositorios
{
    public interface IRepositorio
    {
        //Task: De programacion asincrona. P Claves: await, task, timer
        Task<Genero> ObtenerGenPorId(int Id);

        Task<Actores> ObtenerActPorId(int Id);
        
        List<Genero> ObtenerTodosLosGeneros();
        List<Actores> ObtenerTodosLosActores();


        // ** 3
        Guid ObtenerGuid();


        // ** 8
        void CrearGenero(Genero genero);
        // ** 8
        void CrearActor(Actores actor);
    }
}
