import mainCatogory from './maincatogory/mainCatogory.js';
import Carousel from './Carosal/carousel.js';


export default function loadingPage() {
    return (`
        <div class="loading-page-container">
            <div class="loading-page">

                ${Carousel()}
                ${mainCatogory()}
                
                
            </div>
        </div>
    `);
}
