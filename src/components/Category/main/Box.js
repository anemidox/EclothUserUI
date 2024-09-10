const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="product">
            
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .container {
        display: flex;
        align-items: center;   
        height: 100%; 
        margin: 0;   
        padding: 0;
        box-sizing: border-box;     
    }

    .product {
        display: flex; 
        flex-direction: column; 
        background-color: lightgreen;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px; 
        width: 350px; 
        height: 550px; 
        box-sizing: border-box; 
    }
`;

class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Additional logic if needed
    }
}

customElements.define('product-box', Box);

export default Box;
