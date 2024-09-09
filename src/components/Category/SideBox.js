const template = document.createElement('template');
template.innerHTML = `
    <div class="side-box">
        <!-- Your side box content (e.g., list of categories) -->
        <button data-category="1">Category 1</button>
        <button data-category="2">Category 2</button>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .side-box {
        padding: 20px;
    }
`;

class SideBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (event) => {
                const categoryId = event.target.getAttribute('data-category');
                this.dispatchEvent(new CustomEvent('category-selected', {
                    detail: { categoryId: categoryId },
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}

customElements.define('side-box', SideBox);

export default SideBox;
