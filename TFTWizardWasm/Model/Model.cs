namespace TFTWizardWasm.Model
{
    public class IRootObject<T>
    {
        public required string Type { get; set; }
        public required string Version { get; set; }
        public required Dictionary<string, T> Data { get; set; }
    }

    public class BaseData
    {
        public required string Id { get; set; }
        public required string Name { get; set; }
        public required Image Image { get; set; }
    }

    public class Image
    {
        public required string Full { get; set; }
        public required string Sprite { get; set; }
        public required string Group { get; set; }
        public required int X { get; set; }
        public required int Y { get; set; }
        public required int W { get; set; }
        public required int H { get; set; }
    }
}
