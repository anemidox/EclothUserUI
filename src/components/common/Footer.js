export class Footer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/common/Footer.css">
            <footer class="footer">
                <h2>This Is The Footer</h2>
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);