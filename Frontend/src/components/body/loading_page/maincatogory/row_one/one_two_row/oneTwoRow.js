import oneTwoRowCss from "./oneTwoRowCss.js";

export default function oneTwoRow() {
    // Placeholder for total price calculation
    const items = [
        { name: "Item 1", price: 29.99, quantity: 1, image: "path/to/image1.jpg" },
    ];

    return (`
        ${oneTwoRowCss()}
        <div class="shopping-cart-container">
            <div class="shopping-cart-header">
                <h2>Your Shopping Cart</h2>
                <span>${items.length} items</span>
            </div>
            <div class="shopping-cart-items">
                ${items.map(item => `
                    <div class="shopping-cart-item">
                        <img class="item-image" src="${item.image}" alt="${item.name}">
                        <div class="item-details">
                            <span class="item-name">${item.name}</span>
                            <span class="item-price">$${item.price.toFixed(2)}</span>
                            <div class="item-quantity">
                                <button class="quantity-button" onclick="updateQuantity('${item.name}', -1)">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" readonly>
                                <button class="quantity-button" onclick="updateQuantity('${item.name}', 1)">+</button>
                            </div>
                            <button class="add-to-cart-button">Add to Cart</button>
                            <button class="remove-button" onclick="removeItem('${item.name}')">Remove</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <script>
        function updateQuantity(itemName, change) {
            const items = ${JSON.stringify(items)};
            const item = items.find(i => i.name === itemName);
            if (item) {
                item.quantity = Math.max(1, item.quantity + change);
                document.getElementById("shopping-cart-container").innerHTML = shoppingCart();
            }
        }

        function removeItem(itemName) {
            let items = ${JSON.stringify(items)};
            items = items.filter(i => i.name !== itemName);
            document.getElementById("shopping-cart-container").innerHTML = shoppingCart();
        }
        </script>
    `);
}

