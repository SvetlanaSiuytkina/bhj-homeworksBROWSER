document.addEventListener("DOMContentLoaded", function() {
    const signinDiv = document.getElementById("signin");
    const signinForm = document.getElementById("signin__form");
    const signinBtn = document.getElementById("signin__btn");
    const welcomDiv = document.getElementById("welcome");
    const userId = document.getElementById("user_id");

    function sendAuthorizData(login, password) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
            
        } catch (error) {

        }
    }

    function successfulAuthoriz() {

    }

    function failedAuthoriz() {

    }    
    
    function showError() {

    }

    function hideError() {

    }
})