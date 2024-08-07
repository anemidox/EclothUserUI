export class OurSid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 10px;
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    font-size: 14px; /* Very small font size */
                    color: #333;
                    margin: 0 0 5px; /* Adjusted margin */
                }
                h2 {
                    font-size: 12px; /* Very small font size */
                    color: #666;
                    margin: 0 0 5px; /* Adjusted margin */
                }
            </style>
            <div>
                <h1>Dhanuja Dissanayake : 33041</h1>
                <h2>Additional Information</h2>
                <h1>Sasindu Samith     : 32294</h1>
            </div>
        `;
    }
}

customElements.define('our-sid-footer', OurSid);
