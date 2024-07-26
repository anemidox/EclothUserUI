export class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .logo {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #333;
                }
            </style>
            <div class="logo">Logo</div>
        `;
    }
}

customElements.define('app-logo', Logo);