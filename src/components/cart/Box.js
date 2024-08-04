export class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/cart/Box.css">
            <div class="box">
                <h1>Cart</h1>
                <form class="cart-form">
                    <label>
                        Item Name:
                        <input type="text" name="name" required>
                    </label>
                    <label>
                        Quantity:
                        <input type="number" name="quantity" required>
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" step="0.01" required>
                    </label>
                    <label>
                        Description:
                        <textarea name="description" required></textarea>
                    </label>
                    <button type="submit">Add to Cart</button>
                </form>
                <div class="cart-details">
                    <ul class="cart-items-list"></ul>
                    <p>Total Items: <span class="cart-items-count">0</span></p>
                    <p>Total Price: $<span class="cart-total-price">0.00</span></p>
                </div>
            </div>
        `;

        this.cartForm = this.shadowRoot.querySelector('.cart-form');
        this.cartForm.addEventListener('submit', this.addItem.bind(this));

        this.items = [];
    }

    addItem(event) {
        event.preventDefault();
        const formData = new FormData(this.cartForm);
        const item = {
            name: formData.get('name'),
            quantity: parseInt(formData.get('quantity'), 10),
            price: parseFloat(formData.get('price')),
            description: formData.get('description')
        };
        this.items.push(item);
        this.updateCart();
        this.cartForm.reset();
    }

    updateCart() {
        const itemsList = this.shadowRoot.querySelector('.cart-items-list');
        const itemsCount = this.shadowRoot.querySelector('.cart-items-count');
        const totalPrice = this.shadowRoot.querySelector('.cart-total-price');

        itemsList.innerHTML = '';
        let totalItems = 0;
        let totalCost = 0;

        this.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.name}</strong> - ${item.quantity} x $${item.price.toFixed(2)}
                <p>${item.description}</p>
            `;
            itemsList.appendChild(listItem);

            totalItems += item.quantity;
            totalCost += item.quantity * item.price;
        });

        itemsCount.textContent = totalItems;
        totalPrice.textContent = totalCost.toFixed(2);
    }
}

customElements.define('cart-box', Box);
