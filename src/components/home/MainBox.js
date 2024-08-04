export class MainBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./src/components/home/MainBox.css">
        <div class="home-display-box">
            <div class="box">
                <h3>Box 1</h3>
                <div class="box-content"></div>
            </div>
        </div>
        `;
    }
}

customElements.define('main-box', MainBox);