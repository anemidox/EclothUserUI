import { HomeOneBox } from './HomeOneBox.js';
import { fetchProducts } from '../../api/product.js';

export class HomeBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/components/home/HomeBox.css">
            <div class="home-box"></div>
        `;
    }

    async connectedCallback() {
        try {
            const products = await fetchProducts();
            this.renderProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    renderProducts(products) {
        const container = this.shadowRoot.querySelector('.home-box');
        products.forEach(product => {
            const homeOneBox = document.createElement('home-one-box');
            homeOneBox.product = product;
            container.appendChild(homeOneBox);
        });
    }
}

customElements.define('app-home-box', HomeBox);

