using Newtonsoft.Json;
using TFTWizardWasm.Model;

namespace TFTWizardWasm.Service
{
    public class DataService<T>(HttpClient httpClient) : BaseService(httpClient)
    {
        private T? _data;

        protected HttpClient HttpClient = httpClient;

        public async Task<string> GetImagePath(string name, string domain)
        {
            var realm = await GetOrLoadRealm();

            return $"{realm.Cdn}/{realm.V}/img/tft-{domain}/{name}";
        }

        protected async Task<T> GetOrLoadData()
        {
            if (_data == null)
            {
                _data = await LoadAsync();
            }

            return _data;
        }

        private async Task<T> LoadAsync()
        {
            var realm = await GetOrLoadRealm();

            string domain = typeof(T) switch
            {
                Type a when a == typeof(AugmentRoot) => "augments",
                _ => "undefined",
            };

            var uri = $"{realm.Cdn}/{realm.V}/data/en_US/tft-{domain}.json";
            var response = await HttpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();

            var data = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<T>(data);
        }
    }
}
