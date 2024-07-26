export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .login {
                    font-size: 1rem;
                    color: #333;
                }
            </style>
            <button class="login">Login</button>
        `;
    }
}

customElements.define('app-login', Login);