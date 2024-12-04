/*Creo un array di oggetti*/
const teams = [
    {
        nome: "Team 1",
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: "Team 2",
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: "Team 3",
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: "Team 4",
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: "Team 5",
        puntiFatti: 0,
        falliSubiti: 0,
    }, 
]
/*Assegno alle proprietà numeri randomici*/
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];

    team.puntiFatti = randomNum(0,100);
    team.falliSubiti = randomNum(0,100);
}

/*Creo un nuovo array che contiene solo nomi e falli subiti*/
const result = [];
for (let x = 0; x < teams.length; x++) {
    result.push({
        nome: teams[x].nome,
        falliSubiti: teams[x].falliSubiti,
    });
}

console.log(result);

//Funzione che genera numeri randomici
function randomNum(min,max) {
    return Math.floor(Math.random() * (max -min + 1) + min);
}