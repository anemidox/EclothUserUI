import { navigateTo } from "../../../router/router.js";

const iconPath = 'src/assets/images/logoa.png';

const style = document.createElement('style');
style.textContent = `
    #logo {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 160px; /* Adjust to fit your logo size */
        height: auto;
        margin-top:30px;
        padding: 0;
        position: relative;
        left:-30px;
    }

    #logo img {
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    #logo img:hover {
        transform: scale(1.1); /* Slightly increase the size on hover */
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
