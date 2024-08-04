export class FootList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/footer/FootList.css">
            <div class="footlist">
                <h1>E Clothing</h1>
                <p>&copy; 2024 E Clothing. All rights reserved.</p>
                <p>NSBM Green University</p>
                <p>Phone: (+94) 72 556 3410 | Email: dhanujadisanayke@gmail.com</p>
            </div>
        `;
    }
}

customElements.define('foot-list-footer', FootList);
