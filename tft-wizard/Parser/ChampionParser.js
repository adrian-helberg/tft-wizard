// https://app.mobalytics.gg/tft/champions
let champions = [];
let idCounter = 0;
let charactersElement = document.getElementsByClassName("ep6y0u51")[0];
for (let characterElement of charactersElement.children) {
    let imageElements = characterElement.getElementsByTagName("img");
    const traits = [];
    let bannerSRC;
    let index = 0;
    if (imageElements.length > 3) {
        bannerSRC = imageElements[index++];
    }
    for (index; index < imageElements.length - 1; index++) {
        traits.push({
            name: imageElements[index].getAttribute('alt'),
            src: imageElements[index].getAttribute('src')
        });
    }
    let championTier = {
        name: imageElements[imageElements.length - 1].getAttribute('alt'),
        src: imageElements[imageElements.length - 1].getAttribute('src'),
    };
    let characterInfoElement = characterElement.getElementsByClassName("etgk0v44")[0];
    champions.push({
        id: idCounter++,
        name: characterInfoElement.children[0].textContent,
        costs: characterInfoElement.children[1].textContent,
        style: characterElement.children[0].getAttribute('style'),
        tier: championTier,
        traits: traits
    });
}
copy(champions);