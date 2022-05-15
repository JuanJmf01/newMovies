using Microsoft.AspNetCore.Mvc.Filters;

namespace PeliculasApii.Filters
{
    public class MiFiltroDeAccion : IActionFilter
    {
        //Asinacion como campo (MiFiltroDeAccion)
        private readonly ILogger<MiFiltroDeAccion> logger;

        public MiFiltroDeAccion(ILogger<MiFiltroDeAccion>logger)
        {
            this.logger = logger;
        }
        //Antes de ejecutar la accion
        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogInformation("Antes de ejecutar la accion");
        }
        //Despues de ejecutar la accion
        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogInformation("Despues de ejecutar la accion");
        }

    }
}
