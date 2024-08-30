// src/components/Header/Bar/SearchBar.js
const template = document.createElement('template');
const imagePath = 'src/assets/icons/name.png';
template.innerHTML = `
<style>
@import url('src/assets/style/Header/Bar/SearchBar.css');
</style>
<div>
    <input type="text" placeholder="Search..." aria-label="Search">
    <button aria-label="Search">
    </button>
</div>
`;

class SearchBar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);

        this._input = shadowRoot.querySelector('input');
        this._button = shadowRoot.querySelector('button');

        this._button.addEventListener('click', () => {
            this._handleSearch();
        });

        this._input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this._handleSearch();
            }
        });
    }

    _handleSearch() {
        const query = this._input.value.trim();
        if (query) {
            this.dispatchEvent(new CustomEvent('search', {
                detail: { query },
                bubbles: true,
                composed: true
            }));
            this._input.value = '';
        }
    }
}

customElements.define('header-search-bar', SearchBar);

export { SearchBar };
