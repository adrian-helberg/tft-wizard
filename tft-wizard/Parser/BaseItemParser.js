// https://app.mobalytics.gg/tft/items
let items = [];
let idCounter = 0;
let itemsElement = document.getElementsByClassName("e76wflj1");
for (let itemElement of itemsElement) {
    let icon = itemElement.children[0].children[0].getAttribute('src');
    let name = itemElement.children[0].children[1].textContent;
    let bonus = itemElement.children[2].children[0].textContent; 
    items.push({
        id: idCounter++,
        name: name,
        img: icon,
        bonus: bonus,
    });
}
copy(items);