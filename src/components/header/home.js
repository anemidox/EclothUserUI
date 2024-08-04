export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .home {
                    font-size: 1.5rem;
                    color: #ffffff;
                }
            </style>
            <p class="home">Home</p>
        `;
    }
}

customElements.define('app-home', Home);