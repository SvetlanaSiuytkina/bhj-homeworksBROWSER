document.addEventListener("DOMContentLoaded", function() {
    const bookElement = document.getElementById("book");
    const fontSizeControls = document.querySelectorAll(".font-size");

    function changeFontSize(event) {
        event.preventDefault();
        
        fontSizeControls.forEach(control => {
            control.classList.remove("font-size_active");
        });

        const buttonPress = event.target;
        buttonPress.classList.add("font-size_active");

        const dataSize = buttonPress.getAttribute("data-size");
        bookElement.classList.remove("book_fs-big", "book_fs-small");

        bookElement.classList.add(dataSize === "big" ? "book_fs-big" : "book_fs-small");
    }
    
    fontSizeControls.forEach(button => {
        button.addEventListener("click", changeFontSize);
    });
})