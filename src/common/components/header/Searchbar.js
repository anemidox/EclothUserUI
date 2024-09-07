const iconpath = ('src/assets/icons');

const style = document.createElement('style');
style.textContent = `
    input {
        border-radius: 5px;
        border: 1px solid #ccc;
        width: 500px;
        height: 30px;
    }
    button {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #333;
        color: white;
    }

    img {
        width: 20px;
        height: auto;
    }

    #searchbar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const template = document.createElement('template');
template.innerHTML = `
    <div id="searchbar">
        <div id="bar">
            <input type="text" placeholder="Search..." />
        </div>
        <div id="icon">
            <button>
                <img src="${iconpath}/search.svg" alt="Search" />
            </button>
        </div>
    </div>
`;

class Searchbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        // Any additional logic or event listeners can go here
    }
}

customElements.define('app-searchbar', Searchbar);

export { Searchbar };