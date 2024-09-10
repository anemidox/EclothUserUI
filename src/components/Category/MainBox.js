import Box from './main/Box.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="main-box">
        <div>
            <product-box></product-box>
        </div>
        <div>
            <product-box></product-box>
        </div>
        <div>
            <product-box></product-box>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .main-box {
        padding: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

`;

class MainBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }
}

customElements.define('main-box', MainBox);

export default MainBox;
