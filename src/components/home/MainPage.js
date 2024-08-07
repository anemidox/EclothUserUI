import './Carousel.js';
import './MainBox.js';

export class MainPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="src/components/home/MainPage.css">
        <div class="home">
            <carousel-component></carousel-component>
            <div class="home-display-box">
                <main-box></main-box>
            </div>
        </div>
        `;
    }
}

customElements.define('main-page', MainPage);
