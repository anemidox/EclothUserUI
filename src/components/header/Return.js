export class Return extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .return {
                    font-size: 1rem;
                    color: red;
                }
            </style>
            <button class="return">Return</button>
        `;
    }
}

customElements.define('app-return', Return);