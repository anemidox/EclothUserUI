export class Map extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="src/components/footer/Map.css">
        <div class="map">
            <div class="map__title">
                <h1>Find Us</h1>
            </div>
        </div>
        `;
    }
}

customElements.define('map-contact', Map);