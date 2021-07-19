// https://app.mobalytics.gg/tft/items
let items = [];
let idCounter = 0;
let itemsElement = document.getElementsByClassName("e5d3hmh2");
for (let itemElement of itemsElement) {
    let icon = itemElement.children[0].children[0].getAttribute('src');
    let name = itemElement.children[0].children[1].textContent;
    let tierIcon = itemElement.children[1].getAttribute('src');
    let tierName = itemElement.children[1].getAttribute('alt');
    let bonus = itemElement.children[2].children[0].textContent;
    let receipe = [];
    for (let component of itemElement.children[3].children) {
        receipe.push({
            img: component.getAttribute('src'),
            name: component.getAttribute('alt')
        });
    }    
    items.push({
        id: idCounter++,
        name: name,
        img: icon,
        tierImg: tierIcon,
        tierName: tierName,
        bonus: bonus,
        receipe: receipe
    });
}
copy(items);