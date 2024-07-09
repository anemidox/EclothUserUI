export class Return extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/common/Header/Return.css">
            <div id="return">Return</div>
        `;
    }
}

customElements.define('app-return', Return);