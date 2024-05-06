using TFTWizardWasm.Model;

namespace TFTWizardWasm.Service
{
    public class ItemService(HttpClient httpClient) : DataService<ItemRoot>(httpClient)
    {
    }
}
