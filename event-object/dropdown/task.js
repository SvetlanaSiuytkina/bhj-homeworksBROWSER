document.addEventListener("click", (event) => {
    const dropdown = event.target.closest(".dropdown");
    const dropdownValue = dropdown.querySelector(".dropdown__value");
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const link = event.target.closest(".dropdown__link");

    if (event.target === dropdownValue) {
        dropdownList.classList.toggle("dropdown__list_active");
    }

    if (link) {
        event.preventDefault();
        dropdownValue.textContent = link.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    }
});