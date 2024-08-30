export class FootLogo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('src/assets/style/Footer/Bar/FootLogo.css');
            </style>
            <div class="footlogo"><a href="#/" onclick="navigetTo(/)">
                <img src="src/assets/icons/logo.png" alt="logo"/>
            </a>
            </div>
        `;
    }
}

customElements.define('foot-logo', FootLogo);