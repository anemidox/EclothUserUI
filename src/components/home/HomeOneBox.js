export class HomeOneBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/components/home/HomeOneBox.css">
            <div class="home-one-box">
                <div class="box">
                    <img id="product-image" src="" alt="Product Image"/>
                    <div class="product-info">
                        <p id="product-id"></p>
                        <p id="product-title" class="product-title"></p>
                        <p id="product-price" class="product-price"></p>
                    </div>
                    <div class="actions">
                         <!-- <button id="add-to-cart-button" class="add-to-cart-button">Add to Cart</button> -->
                        <button id="view-details-button" class="view-details-button">View Details</button>
                    </div>
                </div>
            </div>
        `;
    }

    set product(product) {
        // this.shadowRoot.getElementById('product-id').textContent = `ID: ${product.id}`;
        this.shadowRoot.getElementById('product-title').textContent = product.title;
        this.shadowRoot.getElementById('product-price').textContent = `Price: ${product.price}`;
        this.shadowRoot.getElementById('product-image').src = product.image;
    }
}

customElements.define('home-one-box', HomeOneBox);
