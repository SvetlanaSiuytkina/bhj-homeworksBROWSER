document.addEventListener("DOMContentLoaded", function() {
    const answersPoll = document.getElementById("poll__answers");
    const titlePoll = document.getElementById("poll__title");
    
    function loadPoll() {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        console.log(response);

                        let answers = response.data.answers;
                        let title = response.data.title;
                        
                        showPoll(title, answers);
                    } catch (error) {
                        console.error("Ошибка JSON", error);
                        answersPoll.innerHTML = "Ошибка загрузки данных";
                    }
                } else {
                    console.error("Ошибка HTTP", xhr.status, xhr.statusText);
                    answersPoll.innerHTML = "Ошибка загрузки данных";
                }
            }
        }
        xhr.send();
    }
    
    function showPoll(title, pollData) {
        answersPoll.innerHTML = "";

        if (title) {
            titlePoll.textContent = title;  
        }
       
        if (Array.isArray(pollData)) {
            pollData.forEach((answerText, index) => {
                const buttonAnswer = document.createElement("button");
                buttonAnswer.className = "poll__answer";
                buttonAnswer.textContent = answerText;
            
                buttonAnswer.addEventListener("click", function() {
                    clickButtonVoice(index,answerText);
                });
                
                answersPoll.appendChild(buttonAnswer);
            });
        } else if (typeof pollData === "object" && pollData !== null) {
            Object.keys(pollData).forEach((key, index) => {
                const answerText = pollData[key];
                const buttonAnswer = document.createElement("button");
                buttonAnswer.className = "poll__answer";
                buttonAnswer.textContent = answerText;
            
                buttonAnswer.addEventListener("click", function() {
                    clickButtonVoice(index, answerText);
                });
                
                answersPoll.appendChild(buttonAnswer);
            });
        } else {
            answersPoll.innerHTML = "Некорректные данные опроса";
        }
    }
    
    function clickButtonVoice(answerIndex, answerText) {
        alert("Спасибо, ваш голос засчитан!");
    }

    loadPoll();
});