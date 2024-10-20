const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="main">
            <div class="product-details">
                <!-- Product details will be rendered here -->
            </div>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .container {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 600px;
    }

    .product-details {
        text-align: center;
    }

    .product-image {
        width: 100%;
        height: auto;
        max-height: 300px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .product-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .product-price {
        color: green;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .product-description {
        margin-top: 10px;
        color: #666;
    }
`;

class ProductList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        const productId = window.location.pathname.split('/product/')[1];
        if (productId) {
            this.getApiProductDetails(productId);
        } else {
            this.shadowRoot.querySelector('.product-details').innerHTML = 'Product ID not specified';
        }
    }

    async getApiProductDetails(productId) {
        try {
            const response = await fetch(`https://api.anemidox.live/api/v1/controllers/ProductController.php?id=${productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            this.renderProductDetails(data);
        } catch (error) {
            this.shadowRoot.querySelector('.product-details').innerHTML = `Failed to fetch product data: ${error.message}`;
        }
    }

    renderProductDetails(product) {
        const productDetails = this.shadowRoot.querySelector('.product-details');
        productDetails.innerHTML = '';  // Clear any previous content

        if (product && product.name) {
            productDetails.innerHTML = `
                <img class="product-image" src="${product.image_url}" alt="${product.name}">
                <div class="product-title">${product.name}</div>
                <div class="product-price">Price: $${product.price}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-stock">Stock: ${product.stock_quantity}</div>
                <div class="product-category">Category: ${product.category_name}</div>
            `;
        } else {
            productDetails.innerHTML = 'Product not found';
        }
    }
}

customElements.define('product-box', ProductList);

const ProductComponent = (productId) => {
    return `
        <product-box product-id="${productId}"></product-box>
    `;
}

export default ProductComponent;
