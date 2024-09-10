import SideBox from '../components/Category/SideBox.js';
import MainBox from '../components/Category/MainBox.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="side">
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
        gap: 10px; /* Add spacing between side and main sections */
        height: 100vh; /* Full viewport height */
    }

    .side {
        background-color: yellow;
        padding: 10px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Add subtle shadow for separation */
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
        // Any further actions once the component is connected can be added here
    }
}

customElements.define('category-page', Category);

const CategoryComponent = () => {
    return (`
        <category-page></category-page>   
    `);
}

export default CategoryComponent;
