// Create and configure style
const style = document.createElement('style');
style.textContent = `
    footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    footer p {
        margin: 0;
    }
`;

// Create and configure template
const template = document.createElement('template');
template.innerHTML = `
    <footer>
        <p>Footer</p>
    </footer>
`;

// Define the Footer custom element
class Footer extends HTMLElement {
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
customElements.define('app-footer', Footer);

// Export the custom element class (typically, you use this in your HTML directly)
export { Footer };
