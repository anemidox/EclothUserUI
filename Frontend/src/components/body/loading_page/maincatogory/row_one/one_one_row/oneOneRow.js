import oneOneRowCss from "./oneOneRowCss.js";

export default function oneOneRow() {
    // Placeholder for total price calculation
    const items = [
        { name: "Item 1", price: 29.99, quantity: 1, image: "path/to/image1.jpg" },
    ];

    return (`
        ${oneOneRowCss()}
        <div class="one-one-row-container">
            <div class="one-one-row">
                Edit lskjflskfjsdklfjsk
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

