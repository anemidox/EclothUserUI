const template = document.createElement('template');
const imagePath = 'src/assets/icons/name.png';
template.innerHTML = `
<style>
@import url('src/assets/style/Header/Bar/Name.css');
</style>
    <div>
        <img src="${imagePath}" alt="Name">
    </div>
`;

export class Name extends HTMLElement {
    constructor() {
        super(); 
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}

customElements.define('header-name', Name);
