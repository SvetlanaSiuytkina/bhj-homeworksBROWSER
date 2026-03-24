document.addEventListener("DOMContentLoaded", function() {
    const bookElement = document.getElementById("book");
    const fontSizeControls = document.querySelectorAll(".font-size");
    const textColorControls = document.querySelectorAll(".text_color");
    const bgColorControls = document.querySelectorAll(".bg_color");

    function changeFontSize(event) {
        event.preventDefault();
        
        fontSizeControls.forEach(control => {
            control.classList.remove("font-size_active");
        });

        const buttonPress = event.target;
        buttonPress.classList.add("font-size_active");

        const dataSize = buttonPress.getAttribute("data-size");
        bookElement.classList.remove(
            "book_fs-big",
            "book_fs-small"
        );
        
        if (dataSize === "big") {
            bookElement.classList.add("book_fs-big");
        } else if (dataSize === "small") {
            bookElement.classList.add("book_fs-small");
        } //if (dataSize) {bookElement.classList.add(`book_fs-${dataSize}`);}
    }
    
    fontSizeControls.forEach(button => {
        button.addEventListener("click", changeFontSize);
    });

    function changeTextColor(event) {
        event.preventDefault();
        
        textColorControls.forEach(control => {
            control.classList.remove("color_active");
        });

        const buttonPress = event.target;
        buttonPress.classList.add("color_active");

        const dataColorText = buttonPress.getAttribute("data-text-color");
        bookElement.classList.remove(
            "book_color_black",
            "book_color_gray",
            "book_color_whitesmoke"
        );

        if (dataColorText === "black") {
            bookElement.classList.add("book_color_black");
        } else if (dataColorText === "gray") {
            bookElement.classList.add("book_color_gray");
        } else if (dataColorText === "whitesmoke") {
            bookElement.classList.add("book_color_whitesmoke");
        }//if (dataColorText) {bookElement.classList.add(`book_color_${dataColorText}`);
    }
    
    textColorControls.forEach(button => {
        button.addEventListener("click", changeTextColor);
    });
    
    function changeBgColor(event) {
        event.preventDefault();
        
        bgColorControls.forEach(control => {
            control.classList.remove("color_active");
        });

        const buttonPress = event.target;
        buttonPress.classList.add("color_active");

        const databgColor = buttonPress.getAttribute("data-bg-color");
        bookElement.classList.remove(
            "book_bg-gray",
            "book_bg-black",
            "book_bg-white"
        );

        if (databgColor === "gray") {
            bookElement.classList.add("book_bg-gray");
        } else if (databgColor === "black") {
            bookElement.classList.add("book_bg-black");
        } else if (databgColor === "white") {
            bookElement.classList.add("book_bg-white");
        }//if (databgColor) {bookElement.classList.add(`book_bg-${databgColor}`);}
    }
    
    bgColorControls.forEach(button => {
        button.addEventListener("click", changeBgColor);
    });
});