export class Name extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/common/Header/Name.css">
        <h1 class="brand-name"><u>E-Cloth</u></h1>
        `;
    }
}

customElements.define('app-name', Name);