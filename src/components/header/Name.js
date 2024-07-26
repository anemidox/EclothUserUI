export class Name extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <h1>App Name</h1>
        `;
    }
}

customElements.define('app-name', Name);