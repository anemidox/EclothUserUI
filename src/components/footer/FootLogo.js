export class FootLogo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/footer/FootLogo.css">
            <div class="footlogo"><a href="#/" onclick="navigetTo(/)">
                <img src="public/icon/logo.png" alt="logo"/>
            </a>
            </div>
        `;
    }
}

customElements.define('foot-logo', FootLogo);