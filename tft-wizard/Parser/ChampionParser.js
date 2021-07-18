let champions = [];
let idCounter = 0;
let charactersElement = document.getElementsByClassName("characters-item");
for (let characterElement of charactersElement) {
    let characterInfoElement = characterElement.getElementsByClassName("character-icon")[0]
    let champion = {
        id: idCounter++,
        name: characterInfoElement.getAttribute('alt'),
        img: characterInfoElement.getAttribute('src')
    }
    champions.push(champion);
}
copy(champions);