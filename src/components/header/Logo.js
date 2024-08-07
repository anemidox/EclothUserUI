export class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const logoImage = `<img src="public/icon/logo.png" alt="Logo" />`;

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/header/Logo.css">

            <div class="logo">${logoImage}</div>
        `;
    }
}

customElements.define('app-logo', Logo);
