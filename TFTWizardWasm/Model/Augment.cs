namespace TFTWizardWasm.Model
{
    public class AugmentRoot : IRootObject<AugmentData>
    {
        public required AugmentContainer AugmentContainer { get; set; }
    }

    public class AugmentContainer
    {
        public required string Name { get; set; }
        public required Image Image { get; set; }
    }

    public class AugmentData : BaseData
    {
        public string ImageCdnPath { get; set; }
    }
}
