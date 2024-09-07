const template = document.createElement('template');
template.innerHTML = `
    <div class="small-box">
        <div class="inner">
            <h2>Small Box</h2>
        </div>
        <div class="icon">
            <i class="ion ion-bag"></i>
        </div>
    </div>
`;

// Define the style for the component
const style = document.createElement('style');
style.textContent = `
    .small-box {
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 10px;
    }

    .small-box .inner {
        padding: 10px;
    }

    .small-box .icon {
        font-size: 24px;
        color: #333;
    }
`;

// Define the custom element
class SmallBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic can go here
    }
}

// Register the custom element
customElements.define('small-box', SmallBox);

// Export the custom element class
export default SmallBox;
