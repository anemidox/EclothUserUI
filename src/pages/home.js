import { Carousel } from "../components/home/Carousel.js";
import { HomeBox } from "../components/home/HomeBox.js";
import { ProductCarousel } from "../components/home/ProductCarousel.js";


const home = () => {
    return (`
    <link rel="stylesheet" type="text/css" href="./src/pages/home.css">
        <div class="home">
            <app-carousel></app-carousel>
            <div class="home-display-box">
            </div>
            <app-home-box></app-home-box>
            <product-carousel></product-carousel>
        </div>
    `);
}

export default home;