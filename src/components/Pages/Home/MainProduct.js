import { event } from "../../../event/event.js";
import { navigateTo } from "../../../router/router.js";

const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/pages/Home/MainProduct.css');
    </style>
    <div class="main-product">
        <slot name="list1"></slot>
        <slot name="list2"></slot>
        <slot name="list3"></slot>
        <slot name="list4"></slot>

        <slot name="list5"></slot>
        <slot name="list6"></slot>
        <slot name="list7"></slot>
        <slot name="list8"></slot>

        <slot name="list9"></slot>
        <slot name="list10"></slot>
        <slot name="list11"></slot>
        <slot name="list12"></slot>

        <slot name="list13"></slot>
        <slot name="list14"></slot>
        <slot name="list15"></slot>
        <slot name="list16"></slot>

        <slot name="list17"></slot>
        <slot name="list18"></slot>
        <slot name="list19"></slot>
        <slot name="list20"></slot>

        <slot name="list21"></slot>
        <slot name="list22"></slot>
        <slot name="list23"></slot>
        <slot name="list24"></slot>

        <slot name="list25"></slot>
        <slot name="list26"></slot>
        <slot name="list27"></slot>
        <slot name="list28"></slot>

        <slot name="list29"></slot>
        <slot name="list30"></slot>
        <slot name="list31"></slot>
        <slot name="list32"></slot>
    </div>
`;

export class MainProduct extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }

    connectedCallback() {
        
    }
}

customElements.define('main-product', MainProduct);
