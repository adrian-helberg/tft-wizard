// tftactics Team Comps
let teams = [];
let idCounter = 0;
let characterListElement = document.getElementsByClassName("characters-list");
for (let characterElement of characterListElement) {
    let teamsElement = characterElement.getElementsByClassName("team-portrait");
    for (let teamElement of teamsElement) {
        let teamInfoElement = teamElement.getElementsByClassName("team-name-elipsis")[0]
        let name = teamInfoElement.firstChild.textContent;
        let playstyle = teamInfoElement.lastChild.firstChild.textContent;
        let tier = teamElement.getElementsByClassName("team-rank")[0].innerHTML;
        let team = {
            id: idCounter++,
            name: name,
            tier: tier,
            playstyle: playstyle,
            champions: []
        }
        let currentTeamElement = teamElement.getElementsByClassName("team-characters")[0];
        for (let c of currentTeamElement.children) {
            let elements = c.getElementsByClassName("character-icon");
            let champion = {
                name: elements[0].getAttribute('alt'),
                img: elements[0].getAttribute('src'),
                items: []
            };
            for (let i = 1; i < elements.length; i++) {
                champion.items.push({
                    name: elements[i].getAttribute('alt'),
                    img: elements[i].getAttribute('src'),
                });
            }        
            team.champions.push(champion);
        }
        teams.push(team);
    }
}
copy(teams);