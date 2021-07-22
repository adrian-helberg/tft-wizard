// https://app.mobalytics.gg/tft/items/combined
let idCounter = 0;

let items = [];
let baseItemListElement = document.getElementsByClassName("e1s0660u0");
for (const baseItemElement of baseItemListElement) {
    const baseItem = baseItemElement.children[0];

    const name = baseItem.getAttribute("alt");
    const tmp = name.split('-');
    const capital = tmp[0].charAt(0).toUpperCase()
    items.push({
        id: idCounter++,
        name: name,
        displayName: capital + tmp[0].substring(tmp[0].indexOf(capital) + 2) + (!!tmp[1] ? " " + tmp[1] : ""),
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