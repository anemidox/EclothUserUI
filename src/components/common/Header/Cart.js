export class Cart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/common/Header/Cart.css">
        <div class="cart">Cart
        </div>
        `;
    }

}

customElements.define('app-cart', Cart);