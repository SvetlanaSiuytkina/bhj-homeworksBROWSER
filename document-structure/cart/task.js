document.addEventListener("DOMContentLoaded", function() {
    const cartProducts = document.querySelector(".cart__products");
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const quantityValue = product.querySelector(".product__quantity-value");
        const buttonDecrease = product.querySelector(".product__quantity-control_dec");
        const buttonIncrease = product.querySelector(".product__quantity-control_inc");
        const buttonAddToCart = product.querySelector(".product__add");
        const images = product.querySelector(".product__image");
        const productId = product.dataset.id;

        buttonDecrease.addEventListener("click", function() {
            let currentQuantity = parseInt(quantityValue.textContent);
            if(currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        });

        buttonIncrease.addEventListener("click", function() {
            let currentQuantity = parseInt(quantityValue.textContent);
            quantityValue.textContent = currentQuantity + 1;
        });

        buttonAddToCart.addEventListener("click", function() {
            let toAddQuantity = parseInt(quantityValue.textContent);
            const existProductInCart = cartProducts.querySelector(`[data-id"${productId}"]`);

            if(existProductInCart) {
                const countElement = existProductInCart.querySelector("cart__product-count");
                const currentCount = parseInt(countElement.textContent);
                countElement.textContent = currentCount + toAddQuantity;
            } else {
                const newProduct = document.createElement("div");
                newProduct.className = "cart__product";
                newProduct.dataset.id = productId;

                newProduct.innerHTML = `
                <img class="cart__product-image" src="${images}">
                <div class="cart__product-count">${toAddQuantity}</div>
                `;

                cartProducts.appendChild(newProduct);
            }
        });
    });
})