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

    set products(value) {
        this._products = value;
        this.renderProducts();
    }

    renderProducts() {
        const productsContainer = this.shadowRoot.querySelector('#products');
        productsContainer.innerHTML = '';

        if (this._products) {
            this._products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productsContainer.appendChild(productItem);
            });
        }
    }
}

customElements.define('main-box', MainBox);

export default MainBox;
