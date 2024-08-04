export class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode : 'open' })
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="src/components/aboutus/Contact.css">
            <h1>123456</h1>
            <h2>skldfjsl</h2>
        `
    }
}

customElements.define('page-contact', Contact)