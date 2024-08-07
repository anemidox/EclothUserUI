export class MainBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="src/components/home/MainBox.css">
        <div class="home-display-box">
            <h1>Hello, Welcome to our website</h1>
        </div>
        `;
    }
}

customElements.define('main-box', MainBox);