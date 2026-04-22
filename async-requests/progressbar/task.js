document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const progress = document.getElementById("progress");
    const fileInput = document.getElementById("file");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if(!fileInput.files || fileInput.files.length === 0) {
            alert("Выберете файл");
            return;
        }

        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", function(event) {
            if(event.total > 0) {
                const percentValue = (event.loaded / event.total);
                progress.value = percentValue;
                console.log(`Отправлено ${event.loaded} из ${event.total} (${percentValue.toFixed(2)}%)`);
            }
        });
        
        xhr.onloadend = function() {
            if (xhr.status === 200) {
                console.log("Файл успешно загружен");
            } else {
                console.log("Ошибка при загрузке файла: " + xhr.status);
            }
        }
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(formData);
    });
});