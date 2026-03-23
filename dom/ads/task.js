document.addEventListener("DOMContentLoaded", function() {
    
    const rotators = document.querySelectorAll(".rotator");
    
    rotators.forEach(rotator => {
        const rotatorCases = rotator.querySelectorAll(".rotator__case");
        let currentIndex = 0;
        let intervalId;
        
        function changingTextBlocks() {
            rotatorCases[currentIndex].classList.remove("rotator__case_active");
            currentIndex = (currentIndex + 1) % rotatorCases.length;
            rotatorCases[currentIndex].classList.add("rotator__case_active");

            const colorText = rotatorCases[currentIndex].getAttribute("data-color");
            const speedTextChange = rotatorCases[currentIndex].getAttribute("data-speed");

            rotator.style.color = colorText;
        }

        // function intervalDataSpeed(timeDelay) {
        //     if(intervalId) {
        //         clearInterval(intervalId);
        //     }
            
        //     intervalId = setInterval(changingTextBlocks, timeDelay);
        // }
        
        // const colorChange = rotatorCases[0].getAttribute("data-color");
        // const speedChange = rotatorCases[0].getAttribute("data-speed");

        // rotator.style.color = colorChange;
        // intervalId = setInterval(changingTextBlocks, speedChange);
        
        setInterval(changingTextBlocks, 1000); // каждую секунду
    });
});