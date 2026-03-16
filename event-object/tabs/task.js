const tabsAll = document.querySelectorAll(".tabs");

tabsAll.forEach(currentTab => {
    const tabNavigation = currentTab.querySelector(".tab__navigation");
    const tabs = tabNavigation.querySelectorAll(".tab");
    const tabContents = currentTab.querySelectorAll(".tab__content");
    
    tabs.forEach((tab, indexTab) => {
        tab.addEventListener("click", () => {
            tabs.forEach(tabButton => tabButton.classList.remove("tab_active"));
            tabContents.forEach(tabPanel => tabPanel.classList.remove("tab__content_active"));
           
            tab.classList.add("tab_active");
            tabContents.classList.add("tab__content_active");
        });
    });
});