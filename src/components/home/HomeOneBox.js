export class HomeOneBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/components/home/HomeOneBox.css">
            <style>
                .home-one-box {
                    box-sizing: border-box;
                    width: 6em;
                    height: 6em;
                    background-color: #6cc04b;
                    margin: 3px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .home-one-box img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
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
