using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace PeliculasApii.Filters
{
    public class FiltroDeExcepciones: ExceptionFilterAttribute
    {
        private readonly ILogger<FiltroDeExcepciones> logger;

        public FiltroDeExcepciones(ILogger<FiltroDeExcepciones>logger)
        {
            this.logger = logger;
        }

        public override void OnException(ExceptionContext context)
        {
            logger.LogError(context.Exception, context.Exception.Message);
            base.OnException(context);
        }
    }
}
