import { navigateTo } from '../../../router/router.js';

export class HomeRow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/components/home/HomeRow.css">
            <div class="home-row">
                <h2>Products</h2>
                <div id="products"></div>
                <button id="prevButton">Previous</button>
                <button id="nextButton">Next</button>
            </div>
        `;
    }

    connectedCallback() {
        this.currentPage = 1;
        this.fetchProducts();
        this.shadowRoot.getElementById('prevButton').addEventListener('click', () => this.changePage(-1));
        this.shadowRoot.getElementById('nextButton').addEventListener('click', () => this.changePage(1));
    }

    async fetchProducts() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products?limit=5&page=${this.currentPage}`);
            const products = await response.json();
            this.renderProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    renderProducts(products) {
        const productsContainer = this.shadowRoot.getElementById('products');
        productsContainer.innerHTML = products.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price} USD</p>
                <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            </div>
        `).join('');
        
        this.shadowRoot.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => this.addToCart(button.dataset.productId));
        });
    }

    addToCart(productId) {
        console.log(`Product ${productId} added to cart`);
        navigateTo('/cart'); 
    }

    changePage(delta) {
        this.currentPage += delta;
        this.fetchProducts();
    }
}

customElements.define('app-home-row', HomeRow);
