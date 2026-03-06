const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");

let countClick = 0;
let bigPicture = false;

cookie.addEventListener("click", () => {
    countClick++;
    clicker__counter.textContent = countClick;

    if (bigPicture === false) {
        cookie.style.width = "200px";
    } else {
        cookie.style.width = "180px";
    }
    
    bigPicture = !bigPicture;
});