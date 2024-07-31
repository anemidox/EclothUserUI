export class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/footer/Box.css">
        <style>
            .footer-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 10px;
            }
            .footer-container p {
                font-size: 12px;
                color: #333;
            }
        </style>
        <footer class="footer-container">
            <p>&copy; 2021 - All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('app-box', Box);