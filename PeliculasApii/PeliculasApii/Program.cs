using Microsoft.AspNetCore.Authentication.JwtBearer;
using PeliculasApii.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddResponseCaching();


builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(FiltroDeExcepciones));
});

var app = builder.Build();


if (app.Environment.IsDevelopment()) 
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseHttpsRedirection();

app.UseAuthentication();

//
app.UseAuthorization();

app.MapControllers();

app.Run();
