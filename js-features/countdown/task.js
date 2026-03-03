let time = 60;
let timer = document.getElementById("timer");
let counter = setInterval(() => {
    timer.innerHTML = "До окончания конкурса осталось секунд: ${time}";
    time--;

    if (timer < 0) {
        clearInterval(counter);
        alert ("Вы победили в конкурсе!");
    }
}, 1000);
