import { navigateTo } from '../../router/router.js'; 
import { OurProudoutNavBar } from '../Product/OurProudoutNavBar.js';

const template = document.createElement('template');
template.innerHTML = `

<div class="wrapper">
    <app-proudect-nav></app-proudect-nav>
    <div class="category">
        ${[...Array(16).keys()].map(i => `
            <article class="card" id="card-${i + 1}">
                <img class="card_image" src="" alt="Category Image">
                <div class="card_content">
                    <span class="card_title"></span>
                    <span class="card_subtitle"></span>
                    <p class="card_description"></p>
                </div>
            </article>
        `).join('')}
    </div>
</div>
`;

const style = document.createElement('style');
style.textContent = `
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
   
        }

            .wrapper{
              position:relative; /* Ensure child elements respect stacking context */
              width: 100%;
              margin: 0 auto;
            }


        .category{
                margin-top: 100px; /* Add space to prevent overlap with navbar */
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1em; 
                padding: 1em; 
                background: rgba(62, 152, 163, 0.25);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(7.7px);
                -webkit-backdrop-filter: blur(7.7px);
                border: 1px solid rgba(62, 152, 163, 0.32);
        }

        .card {
            position: relative;
            width: 350px;
            height: 500px;
            color: #2e2d31;
            background: black;
            overflow: hidden;
            border-radius:10px;
            transition: border 0.4s ease, transform 0.3s ease;
            margin-top:80px;
            margin-bottom:0px;
  
        }

        .card:hover {
            border: 5px solid #3e98a3; /* Highlight border color */
            transform: scale(1.05); /* Slight zoom for better effect */
        }

        .card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 20px;
            border: 2px solid rgba(62, 152, 163, 0.5); /* Animated border color */
            z-index: -1;
            transition: transform 0.4s ease;
            transform: scale(1.2);
            opacity: 0.7;
        }

        .card:hover::after {
            transform: scale(1); /* Bring the animated border to focus */
        }

        .card_image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .card_content {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 20px;
            background: #f2f2f2;
            border-top-left-radius: 20px;
            transform: translateY(150px);
            transition: transform .25s;
        }

        .card_content::before {
            content: '';
            position: absolute;
            top: -47px;
            right: -45px;
            width: 100px;
            height: 100px;
            transform: rotate(-175deg);
            border-radius: 50%;
            box-shadow: inset 48px 48px #f2f2f2;
        }

        .card_title {
            font-weight: bold;
            color: #131313;
            line-height: 15px;
        }

        .card_subtitle {
            display: block;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .card_description {
            font-size: 14px;
            opacity: 0;
            transition: opacity .5s;
        }

        .card:hover .card_content {
            transform: translateY(0);
        }

        .card:hover .card_description {
            opacity: 1;
            transition-delay: .25s;
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
        const items = this.ensureDataLength(data,16);

        items.forEach((item, index) => {
            const cardId = `#card-${index + 1}`;
            this.updateCard(cardId, item);
        });
    }

    ensureDataLength(data, length) {
        const placeholders = Array.from({ length: Math.max(0, length - data.length) }, () => ({
            name: 'Placeholder',
            description: 'No description available.',
            categorie_url: 'https://via.placeholder.com/250x250.png?text=No+Image',
            id: null,
        }));
        return [...data, ...placeholders];
    }

    updateCard(selector, item) {
        const card = this.shadowRoot.querySelector(selector);
        if (card) {
            const { name = 'No title', description = '', categorie_url = '', id = null } = item;
            card.querySelector('.card_title').textContent = name;
            card.querySelector('.card_subtitle').textContent = description.slice(0, 100); // Optional truncation
            card.querySelector('.card_description').textContent = description;
            const img = card.querySelector('.card_image');
            img.src = categorie_url || 'https://via.placeholder.com/250x250.png?text=No+Image';  // Fallback image
            card.onclick = () => id ? navigateTo(`/category/${id}`) : console.error('No ID for category');
        } else {
            console.error(`Card not found: ${selector}`);
        }
    }
}

customElements.define('category-box', CategoryBox);

export default CategoryBox;
