document.addEventListener("DOMContentLoaded", function() {
    const tasksInput = document.getElementById("task__input");
    const tasksAdd = document.getElementById("tasks__add");
    const tasksList = document.getElementById("tasks__list");

    function addTask() {
        if(tasksInput.value === "") {
            return;
        }
        
        const elementTask = document.createElement("div");
        elementTask.className = "task";

        elementTask.innerHTML = `
            <div class="task__title">${tasksInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        `;
    
        const removeButton = elementTask.querySelector(".task__remove");
        removeButton.addEventListener("click", function(event) {
            event.preventDefault();
            tasksList.removeChild(elementTask);
        });

        tasksList.appendChild(elementTask);
        tasksInput.value = "";
    }

    tasksAdd.addEventListener("click", function(event) {
        addTask();
    });

    tasksInput.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
           addTask(); 
        }
    });
})