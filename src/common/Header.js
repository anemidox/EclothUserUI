import { HeaderLogo } from './components/header/HeaderLogo.js';
import { HeaderName } from './components/header/HeaderName.js';

const template = document.createElement('template');
template.innerHTML = `
    <header>
        <app-logo></app-logo>
        <app-header-name></app-header-name>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        
    }
}

customElements.define('app-header', Header);

const header = () => {
    return (`
        <app-header></app-header>
    `);
}

export default header;