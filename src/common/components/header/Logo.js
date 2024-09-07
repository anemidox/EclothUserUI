const iconPath = ('src/assets/images/logo.png');

const style = document.createElement('style');
style.textContent = `
    img {
        width: 60px;
        height: auto;
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div>
        <img src="${iconPath}" alt="Logo" />
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
        // Optional: Additional setup if needed
    }
}

customElements.define('app-logo', Logo);

export { Logo };
