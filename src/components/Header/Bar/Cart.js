let template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/Header/Bar/Cart.css');
    </style>
    <div class="cart">
        <button type="submit">View Cart</button>
    </div>
`;

export class Cart extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}

customElements.define('header-cart', Cart);