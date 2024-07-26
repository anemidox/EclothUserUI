import { Carousel } from "../components/home/Carousel.js";
import { HomeRow } from "../components/home/HomeRow.js";

const home = () => {
    return (`
        <div class="home">
            <app-carousel></app-carousel>
            <app-home-row></app-home-row>
        </div>
    `);
}

export default home;