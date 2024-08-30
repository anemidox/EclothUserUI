// src/components/Header/Bar/Return.js
const template = document.createElement('template');
template.innerHTML = `
<style>
@import url('src/assets/style/Header/Bar/Return.css');
</style>
<div>
    <button type="submit">Submit Return Request</button>
</div>
`;

export class Return extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);

    }


}

customElements.define('header-return', Return);
