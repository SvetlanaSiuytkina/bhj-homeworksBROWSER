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
        formData.append("file", fileInput.files);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
        
        xhr.addEventListener("progress", function(event) {
            if(event.total > 0) {
                progress.value = (event.loaded / event.total);
            }
        });

        xhr.addEventListener("load", function() {
            if(xhr.status === 200) {
                alert("Файл успешно загружен");
            } else {
                alert("Ошибка при загрузке файла: " + xhr.status);
            }
        });

        xhr.send(formData);
    });
});