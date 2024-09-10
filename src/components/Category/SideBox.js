const template = document.createElement('template');
template.innerHTML = `
    <div class="side-box">
        <button data-category="1">Category 1</button>
        <button data-category="2">Category 2</button>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .side-box {
        padding: 20px;
    }
`;

class SideBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }
}

customElements.define('side-box', SideBox);

export default SideBox;
