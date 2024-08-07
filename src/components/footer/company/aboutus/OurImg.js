export class OurImg extends HTMLElement {
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
                    font-family: Arial, sans-serif;
                }
                .footer-widget {
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    padding: 15px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .footer-title {
                    font-size: 18px;
                    color: #333;
                    margin: 0 0 10px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                li {
                    margin: 5px 0;
                    color: #666;
                }
            </style>
            <div class="col-md-3">
                <div class="footer-widget">
                    <h3 class="footer-title">Our Service</h3>
                    <ul>
                        <li>Our Service</li>
                        <li>Privacy Policy</li>
                        <li>Seller</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('our-img-footer', OurImg);
