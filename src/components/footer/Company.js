export class Company extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "src/components/footer/Company.css">
            <div class="contactus">
                <h3>Company</h3>
                <ul>
                    <li><a href="#/aboutus" onclick="navigateTo('/aboutus')">About Us</a></li>
                    <li><a href="#/ourservice" onclick="navigateTo('/ourservice')">Our Service</a></li>
                    <li><a href="#/privacypolicy" onclick="navigateTo('/privacypolicy')">Privacy Policy</a></li> 
                </ul>
            </div>
        `;
    }
}

customElements.define('contact-us-footer', Company);
