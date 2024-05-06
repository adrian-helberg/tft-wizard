using Newtonsoft.Json;
using TFTWizardWasm.Model;

namespace TFTWizardWasm.Service
{
    public class BaseService(HttpClient httpClient)
    {
        protected HttpClient HttpClient = httpClient;

        protected RealmData Realm;

        public string Region { get; set; } = "euw";

        public async Task<RealmData> GetOrLoadRealm()
        {
            if (Realm == null)
            {
                Realm = await LoadRealmAsync();
            }

            return Realm;
        }

        private async Task<RealmData> LoadRealmAsync()
        {
            var uri = $"https://ddragon.leagueoflegends.com/realms/{Region}.json";

            var response = await HttpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();
            var data = await response.Content.ReadAsStringAsync();

            Realm = JsonConvert.DeserializeObject<RealmData>(data);

            return Realm;
        }

        
    }
}
