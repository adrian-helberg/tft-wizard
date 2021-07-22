// https://app.mobalytics.gg/tft/items/combined
let idCounter = 0;

let items = [];
let baseItemListElement = document.getElementsByClassName("e1s0660u0");
for (const baseItemElement of baseItemListElement) {
    const baseItem = baseItemElement.children[0];

    const name = baseItem.getAttribute("alt");
    const tmp = name.split('-');
    let displayName = "";
    tmp.forEach(x => displayName += (x.charAt(0).toUpperCase() + x.substr(1) + (tmp.indexOf(x) < tmp.length - 1 ? " ": "")));
    items.push({
        id: idCounter++,
        name: name,
        displayName: displayName,
        src: baseItem.getAttribute("src"),
    });
}

let itemListElement = document.getElementsByClassName("e5d3hmh6");
for (const itemElement of itemListElement) {

    const receipeItems = [];
    for (const receipeItem of itemElement.children[3].children) {
        const name = receipeItem.getAttribute('alt');
        receipeItems.push(items.filter(item => item.name == name)[0]);
    }

    items.push({
        id: idCounter++,
        name: itemElement.children[0].children[0].getAttribute('alt'),
        displayName: itemElement.children[0].children[1].textContent,
        src: itemElement.children[0].children[0].getAttribute('src'),
        tier: {
            name: itemElement.children[1].getAttribute('alt'),
            src: itemElement.children[1].getAttribute('src'),
        },
        bonus: itemElement.children[2].children[0].textContent,
        receipe: receipeItems,
    });
}
copy(items);