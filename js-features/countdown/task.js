let time = 59;
const timerElement = document.getElementById("timer");

function updateTimer() {
    timerElement.textContent = time;
}

const counter = setInterval(() => {
    time--;
    updateTimer();

    if (time <= 0) {
        clearInterval(counter);
        alert ("Вы победили в конкурсе!");
    }
}, 1000);


// let time = "04:25:19";
// const timerElement = document.getElementById("timer");

// let timeSeconds = function parseTimeSeconds(time) {
//     const [hours, minutes, seconds] = timeString.split(":").map(Namber);
//     return hours * 3600 + minutes * 60 + seconds;
// }

// function conversionToSeconds(totalSeconds) {
//     const hours = Math.trunc(totalSeconds / 3600);
//     const minutes = Math.trunc(totalSeconds % 3600) / 60;
//     const seconds = totalSeconds % 60;

//     const addingLeadingZero = number => {
//         if (number < 10) {
//             return "0" + number;
//         } else {
//             return number;
//         }
//     }

//     return `${addingLeadingZero(hours)}:${addingLeadingZero(minutes)}:${addingLeadingZero(seconds)}`
// }

// function updateTimer() {
//     timerElement.textContent = conversionToSeconds(timeSeconds);
// }
// updateTimer();

// const counter = setInterval(() => {
//     if (timeSeconds > 0) {
//         timeSeconds--;
//         updateTimer();
//     } else {
//         clearInterval(counter);
//         alert ("Вы победили в конкурсе!");
//     }
// }, 1000);

