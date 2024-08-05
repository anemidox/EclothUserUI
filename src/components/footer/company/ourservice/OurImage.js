export class OurImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.images = '<img src="public/icon/logo.png" alt="logo">';
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .our-image img {
                    width: 10%;
                    height: auto;
                }
            </style>
            <div class="our-image">
                ${this.images}
            </div>
        `;
    }
}

customElements.define('our-image-footer', OurImage);
