export class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/cart/Box.css">
            <div class="box">
                <slot></slot>
                <h1>Cart</h1>
            </div>
        `;
    }
}

customElements.define('cart-box', Box);