export class Name extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const imgName = `<img src="/public/icon/d.png" alt="Name" />`

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/header/Name.css">
            
            <div class="name">${imgName}</div>
        `;
    }
}

customElements.define('app-name', Name);