function showPage(name) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("visible"));
    document.getElementById(name).classList.add("visible");
}

let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cart = document.getElementById("cart");
    cart.innerHTML = "";

    cartItems.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        cart.appendChild(li);
    });
}
