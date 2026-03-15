const dropdown = document.querySelector(".dropdown");
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownValue.addEventListener("click", () => {
    dropdownList.classList.toggle("dropdown__list_active");
});

function selectingMenuItem(event) {
    const link = event.target.closest(".dropdown__link");
    if (link) {
        event.preventDefault();
        dropdownValue.textContent = link.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    }
}

dropdownItems.forEach(item => {
    item.addEventListener("click", selectingMenuItem);
});