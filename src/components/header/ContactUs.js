export class ContactUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .contactus {
                    font-size: 1.5rem;
                    color: #ffffff;
                }
            </style>
            <p class="contactus">Contact Us</p>
        `;
    }
}

customElements.define('app-contactus', ContactUs);