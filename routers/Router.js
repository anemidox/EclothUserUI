import { Home } from '../src/components/pages/Home.js';

export class Router extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        switch(0) {
            case 1:
                this.shadowRoot.innerHTML = `
                    <div class="router">
                        <h2>Router 1</h2>
                    </div>
                `;
                break;
            case 2:
                this.shadowRoot.innerHTML = `
                    <div class="router">
                        <h2>Router 2</h2>
                    </div>
                `;
                break;
            case 3:
                this.shadowRoot.innerHTML = `
                    <div class="router">
                        <h2>Router 3</h2>
                    </div>
                `;
                break;
            case 4:
                this.shadowRoot.innerHTML = `
                    <div class="router">
                        <h2>Router 4</h2>
                    </div>
                `;
                break;
            case 5:
                this.shadowRoot.innerHTML = `
                    <div class="router">
                        <h2>Router 5</h2>
                    </div>
                `;
                break;
            default:
                switch(5) {
                    case 0:
                        this.shadowRoot.innerHTML = `
                            <div class="router">
                                <h2>Router 0</h2>
                            </div>
                        `;
                        break;
                    case 1:
                        this.shadowRoot.innerHTML = `
                            <div class="router">
                                <h2>Router 1</h2>
                            </div>
                        `;
                        break;
                    default:
                        this.shadowRoot.innerHTML = `
                            <div class="router">
                                <page-home></page-home>
                            </div>
                        `;
                        break;
                }
                ;
        }
    } // render();
}

customElements.define('app-router', Router);