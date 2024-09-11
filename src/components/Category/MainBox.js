import Box from './main/Box.js';  // Ensure this import path is correct

const template = document.createElement('template');
template.innerHTML = `
    <div class="main-box">
        <slot name="product-box"></slot>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .main-box {
        padding: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;  /* Add some spacing between items */
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
        // Example data fetching and rendering; replace with actual data source
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://api.anemidox.live/api/v1/controllers/ProductController.php'); // Adjust API URL
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            this.renderProductBoxes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderProductBoxes(products) {
        const container = this.shadowRoot.querySelector('.main-box');
        container.innerHTML = '';  // Clear any existing content

        products.forEach(product => {
            const productBox = document.createElement('product-box');
            productBox.setAttribute('image-url', product.image_url);
            productBox.setAttribute('name', product.name);
            productBox.setAttribute('price', product.price);
            // Set other attributes if needed

            container.appendChild(productBox);
        });
    }
}

customElements.define('main-box', MainBox);

export default MainBox;
