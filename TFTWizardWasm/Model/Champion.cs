namespace TFTWizardWasm.Model
{
    public class ChampionRoot : IRootObject<ChampionData>
    {
    }

    public class ChampionData : BaseData
    {
        public int Tier { get; set; }
    }
}
