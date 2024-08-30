import { FootLogo } from "../components/Footer/Bar/FootLogo.js";
import { ContactUs } from "../components/Footer/Bar/ContactUs.js";
import { GetHelp } from "../components/Footer/Bar/GetHelp.js";
import { Company } from "../components/Footer/Bar/Company.js";
import { FullowUs } from "../components/Footer/Bar/FullowUs.js";
import { FootList } from "../components/Footer/Bar/FootList.js";

export class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
            @import url('src/assets/style/Footer/Footer.css');
            </style>
            <div class="footer">
            <div class="footer__logo">
                <foot-logo></foot-logo>
            </div>
            <div class="footer__section">
                <contact-us-footer></contact-us-footer>
            </div>
            <div class="footer__section">
                <get-help-footer></get-help-footer>
            </div>
            <div class="footer__section">
                <company-list-footer></company-list-footer>
            </div>
            <div class="footer__section">
                <fullow-us-footer></fullow-us-footer>
            </div>
            <div class="footer__bottom">
                <foot-list-footer></foot-list-footer>
            </div>
        </div>
        `;
    }
}

customElements.define('my-footer', Footer);