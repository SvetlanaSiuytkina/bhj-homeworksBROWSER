document.addEventListener("DOMContentLoaded", function() {
    const signinDiv = document.getElementById("signin");
    const signinForm = document.getElementById("signin__form");
    const signinBtn = document.getElementById("signin__btn");
    const welcomDiv = document.getElementById("welcome");
    const userIdElement = document.getElementById("user_id");
    let errorElement = null;

    function sendAuthorizData() {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
        xhr.responseType = "json";

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

        const formData = new FormData(signinForm);
        xhr.send(formData);
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
        if (errorElement) {
            errorElement.remove();
        }

        errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        signinForm.parentNode.insertBefore(errorElement, signinForm);
    }

    function hideError() {
        if(errorElement) {
            errorElement.style.display = "none";
        }
    }

    signinForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendAuthorizData();
    });

    const saveUserId = localStorage.getItem("user_id");

    if (saveUserId) {
        console.log("Добро пожаловать, пользователь:", savedUserId);
        welcomDiv.classList.add("welcome_active");
        signinDiv.classList.remove("signin_active");

        if (userIdElement) {
            userIdElement.textContent = saveUserId;
        }
    } else {
        signinDiv.classList.add("signin_active");
    }
});