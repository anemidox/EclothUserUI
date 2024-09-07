const template = document.createElement('template');
template.innerHTML = `
    <footer>
        <p>Footer</p>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    connectedCallback() {
        const paragraph = this.shadowRoot.querySelector('p');
        paragraph.style.color = 'red';
    }
}

customElements.define('app-footer', Footer);

const footer = () => {
    return (`
        <app-footer></app-footer>
    `);
}

export default footer;
