let items = [];
let idCounter = 0;
let listsElement = document.getElementsByClassName("characters-list");
for (let listElement of listsElement) {
    let itemsElement = listElement.getElementsByClassName("characters-item");
    for (let itemElement of itemsElement) {
        let ItemInfoElement = itemElement.getElementsByClassName("character-icon")[0]
        let item = {
            id: idCounter++,
            name: ItemInfoElement.getAttribute('alt'),
            img: ItemInfoElement.getAttribute('src')
        }
        items.push(item);
    }
}
copy(items);