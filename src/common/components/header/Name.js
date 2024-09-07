const style = document.createElement('style');
style.textContent = `
    h1 {
        color: green;
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div>
        <h1>E Cloth</h1>
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
        // Optional: Add additional logic if needed
    }
}

customElements.define('app-header-name', Name);

export { Name };
