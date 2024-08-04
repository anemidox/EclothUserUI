export class Cart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
             @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
                .cart {
                    font-size: 2.5rem;
                    color: #ffffff;
                }
            </style>
            <div class="cart"><i class='fas fa-shopping-cart'></i></div>
        `;
    }
}

customElements.define('app-cart', Cart);