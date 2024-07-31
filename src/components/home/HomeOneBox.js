export class HomeOneBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/components/home/HomeOneBox.css">
            <div class="home-one-box">
                <div class="box">
                    <p id="product-id"></p>
                    <img id="product-image" src="" alt="Product Image"/>
                </div>
            </div>
        `;
    }

    set product(product) {
        this.shadowRoot.getElementById('product-id').textContent = `ID: ${product.id}`;
        this.shadowRoot.getElementById('product-image').src = product.image;
    }
}

customElements.define('home-one-box', HomeOneBox);
