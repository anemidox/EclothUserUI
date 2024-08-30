export class ContactUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('src/assets/style/Footer/Bar/ContactUs.css');
            </style>

            <div class="companylist">
                <h3>Contact Us</h3>

                <ul>
                    <li><a href="/email" onclick="navigateTo('/email')">Contact Form</a></li>
                    <li><a href="/phone" onclick="navigateTo('/phone')"></a></li>
                </ul>


                <h4> Contact Information </h4>
                <ul class="contacticon">

                    <li class="contactlist">
                        <a class="contacta" href="#" target="_blank" rel="noopener noreferrer">
                        <img class="contactimg" src="src/assets/icons/contacticon/call.png" alt="Call">
                        </a>
                    </li>

                    <li class="contactlist">
                        <a class="contacta" href="#" target="_blank" rel="noopener noreferrer">
                        <img class="contactimg" src="src/assets/icons/contacticon/whatsapp.png" alt="Whatsapp">
                        </a>
                    </li>

                    <li class="contactlist">
                        <a class="contacta" href="#" target="_blank" rel="noopener noreferrer">
                        <img class="contactimg" src="src/assets/icons/contacticon/mail.png" alt="Mail">
                        </a>
                    </li>

                    <li class="contactlist">
                        <a class="contacta" href="#" target="_blank" rel="noopener noreferrer">
                        <img class="contactimg" src="src/assets/icons/contacticon/location.png" alt="Location">
                        </a>
                    </li>

                </ul>

            </div>


        `;
    }
}

customElements.define('company-list-footer', ContactUs);
