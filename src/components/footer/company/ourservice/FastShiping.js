export class FastShiping extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="fast-shiping">
                <div class="fast-shiping__icon">
                    <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="fast-shiping__content">
                    <h3>Fast Shipping</h3>
                    <p>Orders are shipped in the same day and delivered within 2-3 days.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('fast-shiping', FastShiping);