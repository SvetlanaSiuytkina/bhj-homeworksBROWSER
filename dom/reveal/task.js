window.addEventListener("scroll", function() {
    const revealElements = document.querySelectorAll(".reveal");
    const revealPosition = window.innerHeight;

    revealElements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         
         if (elementTop < revealPosition) {
            element.classList.add("reveal_active");
         }
    });
});