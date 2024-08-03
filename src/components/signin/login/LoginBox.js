export class LoginBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/signin/login/LoginBox.css">

        `;
    }
}

customElements.define('login-box', LoginBox);