import { OurSid } from "../../components/footer/company/aboutus/OurSid.js";
import { OurData } from "../../components/footer/company/aboutus/OurData.js";
import { OurImg } from "../../components/footer/company/aboutus/OurImg.js";
import { JoinUs } from "../../components/footer/company/aboutus/JoinUs.js";

const aboutus = () => {
    return (`

        <link rel="stylesheet" href="src/pages/footer/aboutus.css">
        <our-sid-footer></our-sid-footer>
        <our-data-footer></our-data-footer>
        <our-img-footer></our-img-footer>
        <joinus-footer></joinus-footer>

    `)
}

export default aboutus;