const template = document.createElement('template');
template.innerHTML = `
    <div>
        <h1>Category</h1>
    </div>
`;

const style = document.createElement('style');
style.textContent = ` 
    h1 {
        color: red;
    }
`;

class Category extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic when the element is added to the DOM
    }
}

customElements.define('category-page', Category);

const CategoryComponent = () => {
    return (`
        <category-page></category-page>   
    `);
}

export default CategoryComponent;
