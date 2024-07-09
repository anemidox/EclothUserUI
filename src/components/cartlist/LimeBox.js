export class LimeBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/cartlist/LimeBox.css">
            <div class="lime-box">
                <div class="text-box">Sample Text</div>
                <div class="inner-box">
                    <div class="content-box">Content Image Here</div>
                </div>
            </div>
        `;
    }
}

customElements.define('box-lime-box', LimeBox);
