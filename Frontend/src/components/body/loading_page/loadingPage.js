import mainCatogory from './maincatogory/mainCatogory.js';

export default function loadingPage() {
    return (`
        <div class="loading-page-container">
            <div class="loading-page">
                ${mainCatogory()}
            </div>
        </div>
    `);
}
