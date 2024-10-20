const iconPath = ('src/assets/icons/login.png');

const style = document.createElement('style');
style.textContent = `
    button {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #e0f2fe;
        background-color: #e11d48;
        color: white;
        cursor: pointer; /* Improve usability with a pointer cursor */
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
            <img src="${iconPath}" alt="Login" />
        </button>
    </div>
`;

class Login extends HTMLElement {  
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        // Optional: Any additional setup when the component is added to the DOM
    }
}

customElements.define('app-login', Login);

export { Login };
