//Desde esta clase se pretend


using Microsoft.EntityFrameworkCore;
using PeliculasApii.Entidades;
using PeliculasApii.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasApii
{
    //DbContext es la pieza central para acceder a las tablas de nuestra bd
    public class ApplicationDbContext : DbContext
    {
        //Inicializamos el aplication dbcontext. Recibe DbContextOptions el cual le enviamos a Program.cs
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

 
        //DbSet: le digo a ...netCore cuales van a ser las tablas que quiero tener en nuestra base de datos
        //Y en base a que modelo vamos a basar esas tablas. en este caso 'Generos'
        public DbSet<Genero> Generos { get; set; }
    }
}
