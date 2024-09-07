const template = document.createElement('template');
template.innerHTML = `
    <div class="home">
        <slot name="big-box"></slot>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    ::slotted([slot="big-box"]) {
        color: green;
    }
`;

class BigBox extends HTMLElement {
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

customElements.define('big-box', BigBox);

export default BigBox;
