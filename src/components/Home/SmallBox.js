const template = document.createElement('template');
template.innerHTML = `
    <div class="small-home">
        <div class="inner">
            <slot name="small-box"></slot>
        </div>
    </div>
`;


const style = document.createElement('style');
style.textContent = `

    .small-home {
        width: auto;
        height: 600px;
        margin 10px auto;
    }

    small-box img {
        width: 100%;
        height: auto;
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
