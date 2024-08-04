export class LoginBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/signin/login/LoginBox.css">
            <h1>Hello, Login</h1>
        `;
    }
}

customElements.define('login-box', LoginBox);