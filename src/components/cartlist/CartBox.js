import { LimeBox } from "./LimeBox.js";

export class CartBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();

    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/cartlist/CartBox.css">
            <div class="cart-box-main">
                <div class="cart-box">
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
            </div>
            <div class="cart-box">
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
                <box-lime-box></box-lime-box>
            </div>
            </div>
        `;
    }
}

customElements.define('page-cart-box', CartBox);
