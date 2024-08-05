export class JoinUs extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="joinus">
                <h1>Join Us</h1>
                <p>Join us and be part of our team</p>
            </div>
        `;
    }
}

customElements.define('joinus-footer', JoinUs);