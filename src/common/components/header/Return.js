const iconPath = ('src/assets/icons/return.png');

const style = document.createElement('style');
style.textContent = `
    button {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #e0f2fe;
        background-color: #e11d48;
        color: white;
        cursor: pointer; 
    }

    img {
        width: 20px;
        height: auto;
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div>
        <button>
            <img src="${iconPath}" alt="Return" />
        </button>
    </div>
`;

class Return extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        // Additional setup if needed
    }
}

customElements.define('app-return', Return);

export { Return };
