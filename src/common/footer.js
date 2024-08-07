import { FootLogo } from "../components/footer/FootLogo.js";
import { ContactUs } from "../components/footer/ContactUs.js";
import { GetHelp } from "../components/footer/GetHelp.js";
import { Company } from "../components/footer/Company.js";
import { FullowUs } from "../components/footer/FullowUs.js";
import { FootList } from "../components/footer/FootList.js";

const footer = () => {
    return (`
        <link rel="stylesheet" href="src/common/footer.css">
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
    `);
}

export default footer;
