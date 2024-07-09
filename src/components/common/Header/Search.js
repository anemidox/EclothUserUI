export class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/common/Header/Search.css">
        <div class="search-bar">
            <div class="dropdown">
                <div class="dropdown-text">
                    <span>All</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul class="dropdown-list">
                    <li class="dropdown-list-item">All</li>
                    <li class="dropdown-list-item">Kids</li>
                    <li class="dropdown-list-item">Clothes</li>
                    <li class="dropdown-list-item">Watches</li>
                    <li class="dropdown-list-item">Shoes</li>
                    <li class="dropdown-list-item">Baby</li>
                    <li class="dropdown-list-item">Mens-Wear</li>
                    <li class="dropdown-list-item">Womens-Wear</li>
                </ul>
            </div>

            <div class="search-box">
                <input type="text" id="search-input" placeholder="Search">
                <button id="search-button" type="button">Search<i class="fa-solid fa-search"></i></button>
            </div>
        </div>
        `;

        this.addDropdownEventListeners();
    }

    addDropdownEventListeners() {
        const dropdown = this.shadowRoot.querySelector('.dropdown');
        const dropdownList = this.shadowRoot.querySelector('.dropdown-list');
        const dropdownItems = this.shadowRoot.querySelectorAll('.dropdown-list-item');
        const dropdownText = this.shadowRoot.querySelector('.dropdown-text > span');

        dropdown.addEventListener('click', () => {
            dropdownList.classList.toggle('show');
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                dropdownText.textContent = e.target.textContent;
                dropdownList.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                dropdownList.classList.remove('show');
            }
        });
    }
}

customElements.define('app-search', Search);
