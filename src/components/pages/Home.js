import { CartBox } from "../cartlist/CartBox.js";

export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="home">
                <page-cart-box id="1" class="1"></page-cart-box>
                <page-cart-box id="2" class="2"></page-cart-box>
                <page-cart-box id="3" class="3"></page-cart-box>
                <page-cart-box id="4" class="4"></page-cart-box>
                <page-cart-box id="5" class="5"></page-cart-box>
            </div>
        `;
    }
}

customElements.define('page-home', Home);