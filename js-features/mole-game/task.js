const deadElements = document.getElementById("dead");
const lostElements = document.getElementById("lost");
let killMoles = 0;
let numberDefeats = 0;
const victoryKillMoles = 10;
const lossNumberDefeats = 5;

// function getHole(index) {
//     return document.getElementById(`hole${index}`);
// }

const holes = document.querySelectorAll(".hole");

function updateInterface() {
    deadElements.textContent = killMoles;
    lostElements.textContent = numberDefeats;
}

function gameStatus() {
    if(killMoles === victoryKillMoles) {
        alert("Победа!");
        restartGame();
    } else if (numberDefeats === lossNumberDefeats) {
        alert("Поражение!");
        restartGame();
    }
}

function restartGame() {
    killMoles = 0;
    numberDefeats = 0;
    updateInterface();
}

holes.forEach(hole => {
    hole.addEventListener("click", function() {
        if(this.classList.contains("hole_has-mole")) {
            killMoles++;
        } else {
            numberDefeats++;
        }
        
        updateInterface();
        gameStatus()
    });
});