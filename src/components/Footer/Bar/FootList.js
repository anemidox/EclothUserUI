export class FootList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            @import url('src/assets/style/Footer/Bar/FootList.css');
        </style>
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
