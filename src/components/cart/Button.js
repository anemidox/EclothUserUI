export class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    background-color: green;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                }
            </style>
            <div class="box">
                <slot></slot>
                <h1>Button</h1>
            </div>
        `;
    }
}

customElements.define('cart-box-button', Button);