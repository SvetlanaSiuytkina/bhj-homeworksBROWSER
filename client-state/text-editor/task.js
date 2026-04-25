document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");
    const clearButton = document.getElementById("clearButton");

    editor.addEventListener("input", () => {
        const text = editor.value;
        localStorage.setItem("textSaved", text);
    });
    
    const textSaved = localStorage.getItem("textSaved");
    editor.value = textSaved;
    
    clearButton.addEventListener("click", () => {
        editor.value = "";
        localStorage.removeItem("textSaved");
    });
});