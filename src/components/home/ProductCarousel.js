export class ProductCarousel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/home/ProductCarousel.css">
        <div class="carousel">
          <button id="prev-button" class="carousel-button">&#10094;</button>
          <div class="carousel-track-container">
            <div class="carousel-track">
              <!-- Product items will be dynamically added here -->
            </div>
          </div>
          <button id="next-button" class="carousel-button">&#10095;</button>
        </div>
      `;
    }
  
    set products(products) {
      const track = this.shadowRoot.querySelector('.carousel-track');
      track.innerHTML = '';
      products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <p>${product.price}</p>
        `;
        track.appendChild(item);
      });
    }
  }
  
  customElements.define('product-carousel', ProductCarousel);
  