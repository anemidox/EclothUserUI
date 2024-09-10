import { navigateTo } from "../../../router/router.js";

const iconPath = 'src/assets/images/logo.png';

const style = document.createElement('style');
style.textContent = `
    img {
        width: 60px;
        height: auto;
        cursor: pointer;
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div id="logo">
        <img src="${iconPath}" alt="Logo" title="Go to Home Page" /> 
    </div>
`;

class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.addNavigation();
    }

    addNavigation() {
        const logoElement = this.shadowRoot.querySelector('img');
        logoElement.addEventListener('click', () => {
            navigateTo('/');
        });
    }
}

customElements.define('app-logo', Logo);

export { Logo };
