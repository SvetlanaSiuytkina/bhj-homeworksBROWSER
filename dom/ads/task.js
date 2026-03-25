document.addEventListener("DOMContentLoaded", function() {
    
    const rotators = document.querySelectorAll(".rotator");
    
    rotators.forEach(rotator => {
        const rotatorCases = rotator.querySelectorAll(".rotator__case");
        let currentIndex = 0;
        
        function changingTextBlocks() {
            rotatorCases[currentIndex].classList.remove("rotator__case_active");
            currentIndex = (currentIndex + 1) % rotatorCases.length;
            rotatorCases[currentIndex].classList.add("rotator__case_active");

            const colorText = rotatorCases[currentIndex].getAttribute("data-color");
            const speedTextChange = Number(rotatorCases[currentIndex].getAttribute("data-speed"));

            rotator.style.color = colorText;

            setTimeout(changingTextBlocks, speedTextChange);
        }

        setTimeout(changingTextBlocks, 1000);
    });
});