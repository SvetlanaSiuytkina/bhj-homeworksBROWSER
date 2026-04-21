document.addEventListener("DOMContentLoaded", function() {
    function loadPoll() {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const answer = JSON.parse(xhr.responseText);
                    showPoll(answer);
                }
            } 
        }
        xhr.send();
    }

    function showPoll(value) {
        const titlePoll = document.getElementById("poll__title");
        const answersPoll = document.getElementById("poll__answers");

        answersPoll.innerHTML = "";

        titlePoll.textContent = value.title; //

        value.answer.forEach(function(answerText, index) {
            const buttonAnswer = document.createElement("button");
            buttonAnswer.className = "poll__answer";
            buttonAnswer.textContent = answerText;

            buttonAnswer.addEventListener("click", function() {
                clickButtonVoice(index);
            });
            answersPoll.appendChild(buttonAnswer);
        });
    }

    function clickButtonVoice(answerIndex) {
        alert("Спасибо, ваш голос засчитан!");
    }
    loadPoll();
});