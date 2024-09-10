import SmallBox from './SmallBox.js';
import BigBox from './BigBox.js';
import { navigateTo } from '../../router/router.js'; 

const template = document.createElement('template');
template.innerHTML = `
    <div class="category">
        <small-box id="small-box-1">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-2">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-3">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-4">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <big-box id="big-box-1">
            <div slot="big-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-2">
            <div slot="big-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-3">
            <div slot="big-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-4">
            <div slot="big-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </big-box>
        <small-box id="small-box-5">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-6">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-7">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-8">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .category {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.5em;
    }

    :host(category-box) {
        display: block;
        background-color: lightgrey;
    }

    big-box {
        background-color: red;
        max-height: 600px;
        max-width: 300px;
        cursor: pointer;
    }

    big-box img {
        width: 100%;
        height: auto;
    }

    small-box {
        background-color: green;
        max-height: 500px;
        max-width: 300px;
        cursor: pointer;
    }

    small-box img {
        width: 100%;
        height: auto;
    }
`;

class CategoryBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.fetchData();
    }
    
    async fetchData() {
        try {
            const response = await fetch('https://api.anemidox.live/api/v1/controllers/CategoryController.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.renderProductData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderProductData(data) {
        const items = [...data];

        while (items.length < 12) {
            items.push({
                name: 'Placeholder',
                categorie_url: 'https://via.placeholder.com/300x400.png?text=No+Image',
                id: null,
            });
        }

        this.updateBox('#small-box-1', items[0]);
        this.updateBox('#small-box-2', items[1]);
        this.updateBox('#small-box-3', items[2]);
        this.updateBox('#small-box-4', items[3]);
        this.updateBox('#small-box-5', items[8]);
        this.updateBox('#small-box-6', items[9]);
        this.updateBox('#small-box-7', items[10]);
        this.updateBox('#small-box-8', items[11]);

        this.updateBox('#big-box-1', items[4]);
        this.updateBox('#big-box-2', items[5]);
        this.updateBox('#big-box-3', items[6]);
        this.updateBox('#big-box-4', items[7]);
    }

    updateBox(selector, item) {
        const box = this.shadowRoot.querySelector(selector);
        if (box) {
            box.querySelector('h1').textContent = item.name || 'No title';
            box.querySelector('img').src = item.categorie_url || '';
            box.addEventListener('click', () => {
                if (item.id) {
                    navigateTo(`/category/${item.name}`);
                } else {
                    console.error('No category ID provided for navigation.');
                }
            });
        } else {
            console.error(`Box not found: ${selector}`);
        }
    }

    dispatchCategoryChangeEvent(categoryId) {
        const event = new CustomEvent('category-change', {
            detail: { categoryId },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
}

customElements.define('category-box', CategoryBox);

export default CategoryBox;
