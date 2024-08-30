export class GetHelp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            @import url('src/assets/style/Footer/Bar/GetHelp.css');
        </style>
            <div class="gethelp">
                <h3>Get Help</h3>
                <ul>
                    <li><a href="/faq" onclick="navigateTo('/faq')">FAQ</a></li>
                    <li><a href="/orderstatus" onclick="navigateTo('/orderstatus')">Order Status</a></li>
                    <li><a href="/returns" onclick="navigateTo('/returns')">Returns</a></li>
                    <li><a href="/shippings" onclick="navigateTo('/shippings')">Shippings</a></li>
                    <li><a href="/paymentoption" onclick="navigateTo('/paymentoption')">Payment Option</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('get-help-footer', GetHelp);
