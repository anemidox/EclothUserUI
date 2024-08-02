export class Cart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const cart = '<img src="public/icon/cart.png">';
        this.shadowRoot.innerHTML = `
            <style>
                .cart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
            </style>
            <div class="cart">
                <button class="cart__button">${cart}</button>
            </div>
        `;
    }
}

customElements.define('app-cart', Cart);