const template = document.createElement('template');
template.innerHTML = `
    <header>
        <h1>Header Name</h1>
    </header>
`;

class HeaderName extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        
    }
}

customElements.define('app-header-name', HeaderName);

export { HeaderName };
