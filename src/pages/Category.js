import { getProductByCategory } from '../api/getProductByCatogory.js';
import SideBox from '../components/Category/SideBox.js';
import MainBox from '../components/Category/MainBox.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="side">
            <side-box></side-box>
        </div>
        <div class="main">
            <main-box></main-box>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = ` 
    .container {
        display: grid;
        grid-template-columns: 1fr 5fr;
    }

    .side {
        background-color: yellow;
    }

    .main {  
        background-color: lightblue;
    }
`;

class Category extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._categoryId = null;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('side-box').addEventListener('category-selected', (event) => {
            this._categoryId = event.detail.categoryId;
            this.loadProducts();
        });
    }

    async loadProducts() {
        if (!this._categoryId) return;

        try {
            const products = await getProductByCategory(this._categoryId);
            this.displayProducts(products);
        } catch (error) {
            console.error('Failed to load products:', error);
        }
    }

    displayProducts(products) {
        const mainBox = this.shadowRoot.querySelector('main-box');
        mainBox.products = products;
    }
}

customElements.define('category-page', Category);

const CategoryComponent = () => {
    return (`
        <category-page></category-page>   
    `);
}

export default CategoryComponent;
