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



//Conexion
var MyAllowSpecificOrigins = "frontend_url";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3001");
        });
});



//Excepciones
builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(FiltroDeExcepciones));
})
    
    ;

var app = builder.Build();







if (app.Environment.IsDevelopment()) 
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

//Conexion
app.UseCors(MyAllowSpecificOrigins);


app.UseHttpsRedirection();


app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
