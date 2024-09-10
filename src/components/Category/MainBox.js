const template = document.createElement('template');
template.innerHTML = `
    <div class="main-box">
        <div id="products"></div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .main-box {
        padding: 20px;
    }

    #products {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }

    .product-item {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }

    .product-item img {
        width: 100%;
        height: auto;
    }
`;

class MainBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }
}

customElements.define('main-box', MainBox);

export default MainBox;
