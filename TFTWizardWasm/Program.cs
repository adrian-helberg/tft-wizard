using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TFTWizardWasm;
using TFTWizardWasm.Service;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

var config = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", false, true)
    .Build();

builder.Services.AddSingleton(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddSingleton<IConfiguration>(config);
builder.Services.AddSingleton<RiotService>();
builder.Services.AddSingleton<BaseService>();
builder.Services.AddSingleton<AugmentService>();
builder.Services.AddSingleton<ChampionService>();
builder.Services.AddSingleton<ItemService>();
builder.Services.AddSingleton<TraitService>();

await builder.Build().RunAsync();
