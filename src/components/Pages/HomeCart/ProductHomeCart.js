const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/pages/HomeCart/ProductHomeCart.css');
    </style>
    <div class="product-home-cart">
        <h2>Product Home Cart</h2>
        <slot name="list"></slot>
    </div>
`;

export class ProductHomeCart extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }

    connectedCallback() {
        this.innerHTML = this.template;
    }
}

customElements.define('product-home-cart', ProductHomeCart);