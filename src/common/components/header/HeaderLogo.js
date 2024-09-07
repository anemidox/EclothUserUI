const template = document.createElement('template');
template.innerHTML = `
    <header>
        <h1>Header Logo</h1>
    </header>
`;

class HeaderLogo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        
    }
}

customElements.define('app-logo', HeaderLogo);

export { HeaderLogo };