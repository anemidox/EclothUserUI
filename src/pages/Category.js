import SideBox from '../components/Category/SideBox.js';
import MainBox from '../components/Category/MainBox.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="side">
            <h1></h1>
            <img src="" alt="" id="one">
            <img src="" alt="" id="two">

            <side-box></side-box>
        </div>
        <div class="main">
            <main-box></main-box>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = ` 
    .container {
        display: grid;
        grid-template-columns: 1fr 5fr;
        gap: 10px; 
        height: 100vh; 
    }

    .side {
        background-color: yellow;
        padding: 10px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1); 
    }

    .main {  
        background-color: lightblue;
        padding: 10px;
    }
`;

class Category extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const categoryName = window.location.pathname.split('/category/')[1];
        if (categoryName) {
            this.shadowRoot.querySelector('h1').textContent = categoryName;
            this.getApiCategoryName(categoryName);
        } else {
            console.error('No category name found in the URL');
        }
    }

    async getApiCategoryName(categoryName) {
        try {
            const response = await fetch(`https://api.anemidox.live/api/v1/controllers/ProductController.php?category_name=${categoryName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            
            // Log the fetched data for debugging
            console.log('Fetched data:', data);
            
            this.renderProductBoxes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    renderProductBoxes(data) {
        this.shadowRoot.getElementById('one').src = data[0].image_url;
        this.shadowRoot.getElementById('two').src = data[1].image_url;
    }
}

customElements.define('category-page', Category);

const CategoryComponent = () => {
    return (`
        <category-page></category-page>   
    `);
}

export default CategoryComponent;
