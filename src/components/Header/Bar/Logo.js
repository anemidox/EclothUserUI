const template = document.createElement('template');
const imagePath = 'src/assets/icons/logo.png';

template.innerHTML = `
<style>
@import url('src/assets/style/Header/Bar/Logo.css');
</style>
    <div id="logo">
        <img src="${imagePath}" alt="Logo">
    </div>
`;

export class Logo extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);

        shadowRoot.appendChild(clone);
    }
}

customElements.define('header-logo', Logo);
