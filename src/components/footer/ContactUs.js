export class ContactUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "src/components/footer/ContactUs.css">
            <div class="companylist">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="#/email" onclick="navigateTo('/email')">Email</a></li>
                    <li><a href="#/phone" onclick="navigateTo('/phone')">Phone No</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('company-list-footer', ContactUs);
