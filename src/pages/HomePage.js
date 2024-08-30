import { MainHome } from "../components/Pages/Home/MainHome.js";
import { Carousel } from "../components/Pages/Home/Carousel.js";

class HomePage {
    constructor() {
        this.template = `
            <main-carousel></main-carousel>
            <main-page></main-page>
        `;
    }
}

const Home = () => {
    const homePageInstance = new HomePage();
    return `
        ${homePageInstance.template}
    `;
}

export default Home;
