using TFTWizardWasm.Model;

namespace TFTWizardWasm.Service
{
    public class AugmentService(HttpClient httpClient) : DataService<AugmentRoot>(httpClient)
    {
        public async Task<List<AugmentData>> GetOrLoadItems()
        {
            var data = await GetOrLoadData();

            foreach (var augment in data.Data.Values)
            {
                augment.ImageCdnPath = await GetImagePath(augment.Image.Full, "augment");
            }

            return data.Data.Values.ToList();
        }
    }
}
