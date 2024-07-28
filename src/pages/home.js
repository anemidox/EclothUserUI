import { Carousel } from "../components/home/Carousel.js";
import { HomeBox } from "../components/home/HomeBox.js";

const home = () => {
    return (`
    <link rel="stylesheet" type="text/css" href="./src/pages/home.css">
        <div class="home">
            <app-carousel></app-carousel>
            <div class="home-display-box">
                <app-home-box></app-home-box>
            </div>
        </div>
    `);
}

export default home;