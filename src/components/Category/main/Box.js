const template = document.createElement('template');
template.innerHTML = `
    <div class="continer">
        <div class="product">
            <h1>Product</h1>
        <div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .product {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic when the element is added to the DOM
    }
}

customElements.define('product-box', Box);

export default Box;