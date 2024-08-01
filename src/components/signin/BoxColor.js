export class BoxColor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/signin/BoxColor.css">
            <div class="box">
                <slot></slot>
                <h1>Sign In</h1>
            </div>
        `;
    }
}

customElements.define('box-color', BoxColor);