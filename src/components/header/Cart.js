// JavaScript for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});

// Custom Element for Cart
export class Cart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const cartIcon = '<img src="public/icon/e.png">';
        this.shadowRoot.innerHTML = `
            <style>
                .cart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .cart__button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }

                .cart__button img {
                    width: 30px;
                    height: 30px;
                }

                .cart__details {
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background-color: red;
                    color: white;
                    border-radius: 50%;
                    padding: 5px 10px;
                    font-size: 12px;
                }

                .cart__summary {
                    display: none;
                    position: absolute;
                    top: 40px;
                    right: 0;
                    background-color: white;
                    border: 1px solid #ccc;
                    padding: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .cart__summary.open {
                    display: block;
                }
            </style>
            <div class="cart">
                <button class="cart__button">${cartIcon}</button>
                <div class="cart__details">0</div>
                <div class="cart__summary">
                    <p>Items: <span class="cart__items">0</span></p>
                    <p>Total: $<span class="cart__total">0.00</span></p>
                </div>
            </div>
        `;

        this.cartButton = this.shadowRoot.querySelector('.cart__button');
        this.cartDetails = this.shadowRoot.querySelector('.cart__details');
        this.cartSummary = this.shadowRoot.querySelector('.cart__summary');
        this.cartItems = this.shadowRoot.querySelector('.cart__items');
        this.cartTotal = this.shadowRoot.querySelector('.cart__total');

        this.cartButton.addEventListener('click', () => {
            this.cartSummary.classList.toggle('open');
        });

        this.updateCart(3, 150.00); // Example values
    }

    updateCart(items, total) {
        this.cartDetails.textContent = items;
        this.cartItems.textContent = items;
        this.cartTotal.textContent = total.toFixed(2);
    }
}

customElements.define('app-cart', Cart);
