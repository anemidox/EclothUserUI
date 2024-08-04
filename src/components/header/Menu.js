export class Menu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
                .menu {
                    font-size: 2rem;
                    color: #ffffff;
                }
            </style>
            <p class="menu"><i class="fas fa-bars"></i></p>
        `;
    }
}

customElements.define('app-menu', Menu);