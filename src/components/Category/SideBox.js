const template = document.createElement('template');
template.innerHTML = `
    <div class="side-box">
        
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
