export class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        let searchImg = './public/icon/search.png';

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/header/Search.css">
    
            <div class="search-container">
                <input class="search" type="text" placeholder="Search">
                <button class="button"><img src="${searchImg}"></button>
            </div>
        `;
    }
}

customElements.define('app-search', Search);