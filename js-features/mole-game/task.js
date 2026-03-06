const deadElements = document.getElementById("dead");
const lostElements = document.getElementById("lost");
let killMoles = 0;
let numberDefeats = 0;
let victoryKillMoles = 10;
let lossNumberDefeats = 5;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function updateInterface() {
    deadElements.textContent = dead;
    lostElements.textContent = lost;
}

