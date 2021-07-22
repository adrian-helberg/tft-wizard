// https://app.mobalytics.gg/tft/team-comps
let comps = [];
let idCounter = 0;
let compListElement = document.getElementsByClassName("e1yyksvk7");
for (const compElement of compListElement) {    
    const info = compElement.children[1];
    const champions = compElement.children[2];
    const _c = [];
    for (const champion of champions.children) {
        const _i = [];
        const items = champion.children[0].children[1];
        if (items) {
            for (const item of items.children) {
                _i.push(item.getAttribute('alt'));
            }
        }
        _c.push({
            name: champion.children[1].textContent,
            src: champion.children[0].children[0].children[0].children[0].getAttribute('src'),
            items: _i
        });
    }
    comps.push({
        name: info.children[0].textContent,
        playstyle: info.children[1].children[0].textContent,
        difficulty: info.children[1].children[1].textContent,
        tier: {
            name: info.children[2].getAttribute('alt'),
            src: info.children[2].getAttribute('src')
        },
        champions: _c
    });
}
copy(comps);