import rowOne from './row_one/rowOne.js';

export default function mainCatogory() {
    return (`
        <div class="main-catogory-container">
            <div class="main-catogory">
                ${rowOne()}
            </div>
        </div>
    `);
}
