export class Map extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <h1>This is map</h1>
        `;
    }
}

customElements.define('map-contact', Map);
