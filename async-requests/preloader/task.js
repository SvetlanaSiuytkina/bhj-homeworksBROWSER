document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const items = document.getElementById("items");

    loader.classList.add("loader_active");
    items.innerHTML = "";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);

    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            loader.classList.remove("loader_active");
            
            if (xhr.status === 200) {
                const value = JSON.parse(xhr.responseText);

                for (const currency of value) {                            ////////////////
                    const itemElement = document.createElement("div");
                    itemElement.className = "item";
                
                    const codeItem = document.createElement("div");
                    codeItem.className = "item__code";
                    codeItem.textContent = currency.CharCode;
                
                    const valueItem = document.createElement("div");
                    valueItem.className = "item__value";
                    valueItem.textContent = currency.Value;
                
                    const currencyItem = document.createElement("div");
                    currencyItem.className = "item__currency";
                    currencyItem.textContent = currency.Nominal;
                
                    itemElement.appendChild(codeItem);
                    itemElement.appendChild(valueItem);
                    itemElement.appendChild(currencyItem);
                
                    items.appendChild(itemElement);
                };
            }
        }
    });
    xhr.send();
});