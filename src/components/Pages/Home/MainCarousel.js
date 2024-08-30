const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/pages/Home/MainCarousel.css');
    </style>
    <div class="main-carousel">
        <h2>Main Carousessl</h2>
    </div>
`;

export class MainCarousel extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('sub-carousel', MainCarousel);