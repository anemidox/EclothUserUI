export class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/common/Header/Logo.css">
            <img src="./src/components/img/logo.png" alt="Logo">
        `;
    }
}

customElements.define('app-logo', Logo);