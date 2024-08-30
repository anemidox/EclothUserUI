import { navigateTo } from "../../../router/router.js";
import { fetchCategories, getCategoryData } from "../../../api/fetchPhotos.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        @import url('src/assets/style/pages/Home/MainHome.css');
    </style>

    <div class="main-home">
        ${Array.from({ length: 32 }, (_, i) => `
            <main-product id="box${i + 1}">
                <div slot="list${i + 1}">
                    <div class="product">
                        <img id="img${i + 1}" alt="Product Image">
                        <h3 id="title${i + 1}"></h3>
                    </div>
                </div>
            </main-product>
        `).join('')}
    </div>
`;

export class MainHome extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        fetchCategories()
            .then(categories => {
                // Populate global variables
                window.categoryIds = categories.map(category => category.id);
                window.categoryCategories = categories.map(category => category.category);
                window.categoryNames = categories.map(category => category.name);
                window.categoryDescriptions = categories.map(category => category.description);
                window.categoryImages = categories.map(category => category.image || 'https://via.placeholder.com/600/51aa97');

                // Update local data from global variables
                const { ids: categoryIds, category: categoryCategories, name: categoryNames, description: categoryDescriptions, image: categoryImages } = getCategoryData();

                // Iterate over the 32 slots
                for (let i = 0; i < 32; i++) {
                    const img = this.shadowRoot.getElementById(`img${i + 1}`);
                    const title = this.shadowRoot.getElementById(`title${i + 1}`);
                    const box = this.shadowRoot.getElementById(`box${i + 1}`);

                    // Check if there's data to display
                    if (i < categoryImages.length && i < categoryNames.length) {
                        img.src = categoryImages[i];
                        title.textContent = categoryNames[i];

                        if (box) {
                            box.addEventListener("click", () => {
                                navigateTo(`/${categoryCategories[i]}/${categoryNames[i]}`);
                            });
                        }
                    } else {
                        // Optionally hide or clear the element if there's no data
                        img.src = 'https://via.placeholder.com/150'; // Placeholder image
                        title.textContent = 'No Data Available';
                    }
                }
            })
            .catch(error => console.error('Error loading categories:', error));
    }
}

customElements.define("main-page", MainHome);
