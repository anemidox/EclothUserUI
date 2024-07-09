export class SignIn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/common/Header/Signin.css">
        <div class="sign-in">Sign In</div>
        `;
    }
}

customElements.define('app-sign-in', SignIn);