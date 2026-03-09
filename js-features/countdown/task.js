// let time = 59;
// const timerElement = document.getElementById("timer");

// function updateTimer() {
//     timerElement.textContent = time;
// }

// const counter = setInterval(() => {
//     time--;
//     updateTimer();

//     if (time <= 0) {
//         clearInterval(counter);
//         alert ("Вы победили в конкурсе!");
//     }
// }, 1000);


let time = 300;
const timerElement = document.getElementById("timer");

function conversionToSeconds(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
       .map((value) => String(value)
       .padStart(2, "0")).join(":");
}

function updateTimer() {
    timerElement.textContent = conversionToSeconds(time);
}
updateTimer();

const counter = setInterval(() => {
    time -= 1;
    updateTimer();

    if (time === 0) {
        clearInterval(counter);
        alert ("Вы победили в конкурсе!");
    }
}, 1000);