const template = document.createElement('template');
template.innerHTML = `
    <div class="big-home">
        <div class="inner">
            <slot name="big-box"></slot>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    
    .big-home {
        width: auto;
        height: 600px;
        margin 10px auto;
    }

    big-box img {
        width: 100%;
        height: auto;
    }

`;


class BigBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic when the element is added to the DOM
    }
}

customElements.define('big-box', BigBox);

export default BigBox;
