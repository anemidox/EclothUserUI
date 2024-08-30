export class Company extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            @import url('src/assets/style/Footer/Bar/Company.css');
        </style>
            <div class="contactus">
                <h3>Company</h3>
                <ul>
                    <li><a href="/about" onclick="navigateTo('/about')">About Us</a></li>
                    <li><a href="/ourservice" onclick="navigateTo('/ourservice')">Our Service</a></li>
                    <li><a href="/privacy" onclick="navigateTo('/privacy')">Privacy Policy</a></li> 
                    <li><a href="/seller" onclick="navigateTo('/seller')">Become A Seller</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('contact-us-footer', Company);
