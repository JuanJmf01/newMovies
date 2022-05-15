using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Logging;
using PeliculasApii.Controllers;
using PeliculasApii.Filters;
using PeliculasApii.Repositorios;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddResponseCaching();
//Cuando se solicite un servicio del tipo IRepositorio se va satisfacer con la clase RepositorioEnMemoria
// EJ: Si tengo 300 clases que dependen de IRepositorio, si deseo cambiar el servicio 'RepositoriEnMemoria',
//Simplemente cambio 'RepositorioEnMemoria' a 'RepositorioSQL' por ej o 'RepositorioOracleSQL'
builder.Services.AddSingleton<IRepositorio, RepositorioEnMemoria>();
//AddScoped: La instancia de repositorio en memovio vive dentro del mismo contexto de http. Cada vez que recargo me sale un gid diferente
//AddTransient: Siempre retorna una nueva instancia sim importar si es dentro del contexto de http
//AddSingleton: La instancia de repositorio en memoria funciona para toda la aplicacion. Cada vez que recargo me sale el mismo guid
// ** 6
builder.Services.AddScoped<WeatherForecastController>();

builder.Services.AddTransient<MiFiltroDeAccion>();
builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(FiltroDeExcepciones));
});

var app = builder.Build();




// Configure the HTTP request pipeline.
//Los middlewear que empiezan con Use son aquellos que no detienen el proceso


//Guardar en un log todas las respuestas que nuestro Web API envie a sus clientes
/*
 app.Use(async (context, next) =>
{
    using (var swapStream = new MemoryStream())
    {
        var respuestaOriginal = context.Response.Body;
        context.Response.Body = swapStream;

        await next.Invoke();

        swapStream.Seek(0, SeekOrigin.Begin);
        string respuesta = new StreamReader(swapStream).ReadToEnd();
        swapStream.Seek(0, SeekOrigin.Begin);

        await swapStream.CopyToAsync(respuestaOriginal);
        context.Response.Body = respuestaOriginal;

         
    }
});
 */


app.Map("/mapa1", (app) =>
{
    app.Run(async contex =>
    {
        await contex.Response.WriteAsync("Estoy interceptanto el Pipeline");
    });
});



if (app.Environment.IsDevelopment()) 
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseHttpsRedirection();

app.UseResponseCaching();
app.UseAuthentication();

//
app.UseAuthorization();

app.MapControllers();

app.Run();
