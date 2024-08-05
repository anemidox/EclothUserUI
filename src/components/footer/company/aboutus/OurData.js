export class OurData extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 10px;
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                }
                h3 {
                    margin-top: 0;
                    color: #333;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin: 5px 0;
                }
            </style>
            <div>
                <h3>Address</h3>
                <ul>
                    <li>Dhanuja Dissanayake : 33041</li>
                    <li>Sasindu Samith     : 32294</li>
                </ul>
            </div>
        `;
    }
}

customElements.define('our-data-footer', OurData);
