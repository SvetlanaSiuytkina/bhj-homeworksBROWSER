document.addEventListener("DOMContentLoaded", function() {
    const tooltipElements = document.querySelectorAll(".has-tooltip");

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);
    let currentElementTooltip = null;

    function showTooltip(element) {
        const tooltipText = element.getAttribute("title");

        if(currentElementTooltip === element) {
            tooltip.classList.toggle("tooltip_active");
            return;
        }

        tooltip.textContent = tooltipText;
        currentElementTooltip = element;
        
        const rect = element.getBoundingClientRect();
        let top = rect.bottom + window.pageYOffset;
        let left = rect.left + window.pageXOffset;

        tooltip.style.top = `${top}px`
        tooltip.style.left = `${left}px`;
        tooltip.classList.add("tooltip_active");
    }

    function hideTooltip() {
        tooltip.classList.remove("tooltip_active");
        currentElementTooltip = null;
    }
    
    tooltipElements.forEach(element => {
        element.addEventListener("click", function(elem) {
            elem.preventDefault();

            if(currentElementTooltip === element) {
                tooltip.classList.toggle("tooltip_active");
                return;
            } else {
                hideTooltip();
                showTooltip(element);
            }
        });
    });

    document.addEventListener("click", event => {
        if(!event.target.closest(".has-tooltip")) {
            hideTooltip()
        }
    });
});