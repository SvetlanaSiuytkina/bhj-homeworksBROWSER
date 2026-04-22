document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close");

    function setCookie(name, value) {
        document.cookie = `${name} = encodeURIComponent(value); expires=Mon, 01 Jan 2018 00:00:00 GMT + "; " +
        "path=/;"`
    }

    function getCookie(name) {
        const pairs = document.cookie.split("; ");
        const cookiePairs = pairs.find(p => p.startsWith(name + "="));
        return cookiePairs.substr(name.length + 1);
    }

    closeButton.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        setCookie("modalClosed", "true");
    });
    
    const isModalClosed = getCookie("modalClosed");
    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }
});