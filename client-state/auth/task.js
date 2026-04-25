document.addEventListener("DOMContentLoaded", function() {
    const signinDiv = document.getElementById("signin");
    const signinForm = document.getElementById("signin__form");
    const signinBtn = document.getElementById("signin__btn");
    const welcomDiv = document.getElementById("welcome");
    const userIdElement = document.getElementById("user_id");
    let errorElement = null;

    function sendAuthorizData(login, password) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            const response = xhr.response;
            
            if (response && response.userId) {
                successfulAuthoriz(response.userId);
            } else {
                failedAuthoriz();
            }
        }

        xhr.onerror = function() {
            failedAuthoriz();
        }

        const authorizObject = {login, password};
        const authorizData = JSON.stringify(authorizObject);
        xhr.send(authorizData);
    }
    
    function successfulAuthoriz(userId) {
        localStorage.setItem("user_id", userId);

        if (userIdElement) {
            userIdElement.textContent = userId;
        }
        
        signinDiv.classList.remove("signin_active");
        welcomDiv.classList.add("welcome_active");
        signinForm.reset();
        hideError();
    }

    function failedAuthoriz() {
        showError("Неверный логин/пароль");
        signinForm.reset();
    }    
    
    function showError(message) {
        let errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    function hideError() {
        if(errorElement) {
            errorElement.style.display = "none";
        }
    }

    signinForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const login = document.querySelector("input[name='login']");
        const password = document.querySelector("input[name='password']");

        sendAuthorizData(login, password);
    });

    const saveUserId = localStorage.getItem("user_id");

    if (saveUserId) {
        welcomDiv.classList.add("welcome_active");
        signinDiv.classList.remove("signin_active");
    } else {
        signinDiv.classList.add("signin_active");
    }
});