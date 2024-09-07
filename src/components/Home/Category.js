import SmallBox from './SmallBox.js';
import BigBox from './BigBox.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="category">
        <small-box></small-box>
        
        <big-box>
            <div slot="big-box">
                <h1>Box 1</h1>
            </div>
        </big-box>
        
        <big-box>
            <div slot="big-box">
                <h1>Box 2</h1>
            </div>
        </big-box>  
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .category {
        padding: 10px;
    }
`;

class CategoryBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style);  // Append style first
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic when the element is added to the DOM
    }
}

customElements.define('category-box', CategoryBox);

export default CategoryBox;
