import { Logo } from "../components/Header/Bar/Logo.js";
import { Name } from "../components/Header/Bar/Name.js";
import { SearchBar } from "../components/Header/Bar/SearchBar.js";
import { Return } from "../components/Header/Bar/Return.js";
import { Login } from "../components/Header/Bar/Login.js";
import { Cart } from "../components/Header/Bar/Cart.js";

// Style is imported in the template
const stylePath = 'src/assets/style/Header/Header.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
@import url('${stylePath}');
</style>
    <div id="header">
        <a data-link href="/" id="logo"><header-logo></header-logo></a>
        <a data-link href="/" id="name"><header-name></header-name></a>
        <header-search-bar></header-search-bar>
        <a data-link href="/return" id="return"><header-return></header-return></a>
        <a data-link href="/login" id="login"><header-login></header-login></a>
        <a data-link href="/cart" id="cart"><header-cart></header-cart></a>
    </div>
`;

export class Header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }

    connectedCallback() {
        this.shadowRoot.addEventListener('click', (e) => {
            if (e.target.closest('[data-link]')) {
                e.preventDefault();
                const path = e.target.closest('[data-link]').getAttribute('href');
                window.history.pushState({}, '', path);
                window.dispatchEvent(new Event('popstate')); // Trigger the router
            }
        });
    }
}

customElements.define('my-header', Header);
