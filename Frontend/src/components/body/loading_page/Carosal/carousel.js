import CarouselCss from "./carouselCss.js";

export default function Carousel() {
    return (`
        ${CarouselCss()}
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-item">Item 1</div>
                <div class="carousel-item">Item 2</div>
                <div class="carousel-item">Item 3</div>
                <div class="carousel-item">Item 4</div>
            </div>
            <button class="carousel-button prev">‹</button>
            <button class="carousel-button next">›</button>
        </div> 
    `);
}
