let template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/Header/Bar/Login.css');
    </style>
    <div class="login">
        <form>
            <button type="submit">Login</button>
        </form>
    </div>
`;

export class Login extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}

customElements.define('header-login', Login);