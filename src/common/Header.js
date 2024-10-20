// Import necessary components
import { Logo } from './components/header/Logo.js';
import { Name } from './components/header/Name.js';
import { Searchbar } from './components/header/Searchbar.js';
import { Return } from './components/header/Return.js';
import { Login } from './components/header/Login.js';
import { Cart } from './components/header/Cart.js';

// Create and configure style
const style = document.createElement('style');
style.textContent = `
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background-color: #fca5a5;
        color: white;
    }
`;

// Create and configure template
const template = document.createElement('template');
template.innerHTML = `
    <header>
        <app-logo></app-logo>
        <app-header-name></app-header-name>
        <app-searchbar></app-searchbar>
        <app-return></app-return>
        <app-login></app-login>
        <app-cart></app-cart>
    </header>
`;

// Define the Header custom element
class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional setup if needed
    }
}

// Define the custom element
customElements.define('app-header', Header);

// Export the custom element class (use this in HTML or other components)
const AppHeader = () => {
    return `
        <app-header></app-header>
    `
}

export { AppHeader };
