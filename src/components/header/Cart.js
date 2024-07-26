export class Cart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .cart {
                    font-size: 1rem;
                    color: #333;
                }
            </style>
            <button class="cart">Cart</button>
        `;
    }
}

customElements.define('app-cart', Cart);