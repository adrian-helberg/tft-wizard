using TFTWizardWasm.Model;

namespace TFTWizardWasm.Service
{
    public class TraitService(HttpClient httpClient) : DataService<TraitRoot>(httpClient)
    {
    }
}
