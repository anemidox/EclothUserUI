import { navigateTo } from "../../../router/router.js";

const style = document.createElement('style');
style.textContent = `
    .header-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }
    
    h3 {
        color: #fde047; 
        font-size: 30px; 
        font-family: courier, monospace; 
        text-align: center; 
        margin: 0; 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
        font-weight: bold; 
        font-style: italic; 
        border: 2px solid #ea580c;
        padding: 0px; 
        border-radius: 5px; 
        animation: pulse 2s infinite; 
        cursor: pointer;  
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.05);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div class="header-container">
        <h3 title="Go to Home Page">E Cloth</h3>
    </div>
`;

class Name extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const nameNavigation = this.shadowRoot.querySelector('h3');
        nameNavigation.addEventListener('click', () => {
            navigateTo('/'); 
        });
    }
}

customElements.define('app-header-name', Name);

export { Name };
