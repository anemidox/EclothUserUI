import { navigateTo } from '../../router/router.js'; 

const template = document.createElement('template');
template.innerHTML = `
    <div class="category">
        ${[...Array(24).keys()].map(i => `
            <div class="box" id="box-${i + 1}">
                <div class="box-content">
                    <h1></h1>
                    <img src="" alt="">
                </div>
            </div>`).join('')}
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .category {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em; 
        background-color: #f87171;
        padding: 1em; 
    }

    .box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px; 
        overflow: hidden; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
        transition: transform 0.3s ease; 
        background-color: #bef264;
        height: 500px;
        width: 100%;
    }

    .box-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: em;
        box-sizing: border-box;
        color: white;
        text-align: center;
    }

    .box img {
        width: 100%;
        height: 500px; 
        object-fit: cover; 
    }

    .box h1 {
        font-size: 1.2em;
        margin: 0.5em 0;
        color: #052e16;
    }

    .box:hover {
        transform: scale(1.05); 
    }

    @media (max-width: 1024px) {
        .category {
            grid-template-columns: repeat(2, 1fr); 
        }
    }

    @media (max-width: 600px) {
        .category {
            grid-template-columns: 1fr; 
        }

        .box {
            height: 250px; 
        }

        .box h1 {
            font-size: 1em; 
        }
    }
`;

class CategoryBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(style.cloneNode(true), template.content.cloneNode(true));
    }

    connectedCallback() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://api.anemidox.live/api/v1/controllers/CategoryController.php');
            if (!response.ok) throw new Error('Network error');
            const data = await response.json();
            this.renderCategoryData(data);
        } catch (error) {
            console.error('Data fetch error:', error);
        }
    }

    renderCategoryData(data) {
        const items = this.ensureDataLength(data, 24);

        items.forEach((item, index) => {
            const boxId = `#box-${index + 1}`;
            this.updateBox(boxId, item);
        });
    }

    ensureDataLength(data, length) {
        const placeholders = Array.from({ length: Math.max(0, length - data.length) }, () => ({
            name: 'Placeholder',
            categorie_url: 'https://via.placeholder.com/300x400.png?text=No+Image',
            id: null,
        }));
        return [...data, ...placeholders];
    }

    updateBox(selector, item) {
        const box = this.shadowRoot.querySelector(selector);
        if (box) {
            const { name = 'No title', categorie_url = '', id = null } = item;
            box.querySelector('h1').textContent = name;
            box.querySelector('img').src = categorie_url;
            box.onclick = () => id ? navigateTo(`/category/${name}`) : console.error('No ID for category');
        } else {
            console.error(`Box not found: ${selector}`);
        }
    }
}

customElements.define('category-box', CategoryBox);

export default CategoryBox;
