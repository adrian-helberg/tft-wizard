namespace TFTWizardWasm.Service
{
    public class RiotService
    {
        private readonly IConfiguration _configuration;

        public RiotService(IConfiguration configuration)
        {
            _configuration = configuration;
            Initialize();
        }

        public string? GetApiKey()
        {
            var apiKey = _configuration["ApiSettings:ApiKey"];
            if (string.IsNullOrEmpty(apiKey)) {
                Console.WriteLine("Invalid API key");
                return null;
            }

            return apiKey;
        }

        private void Initialize()
        {
            var apiKey = _configuration["ApiSettings:ApiKey"];
            if (string.IsNullOrEmpty(apiKey)) {
                Console.WriteLine($"Unable to initialize {nameof(RiotService)}. Invalid API key");
                return;
            }
        }
    }

}
