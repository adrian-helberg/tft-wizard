namespace TFTWizardWasm.Model
{    public class RealmData
    {
        public required RealmVersionData N { get; set; }
        public required string V { get; set; }
        public required string L { get; set; }
        public required string Cdn { get; set; }
        public required string DD { get; set; }
        public required string LG { get; set; }
        public required string Css { get; set; }
        public required int ProfileIconMax { get; set; }
        public required string Store { get; set; }
        public override string ToString()
        {
            return "Realm version " + V;
        }
    }

    public class RealmVersionData
    {
        public required string Item { get; set; }
        public required string Rune { get; set; }
        public required string Mastery { get; set; }
        public required string Summoner { get; set; }
        public required string Champion { get; set; }
        public required string ProfileIcon { get; set; }
        public required string Map { get; set; }
        public required string Language { get; set; }
        public required string Sticker { get; set; }
    }
}
