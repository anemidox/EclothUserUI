export class cratboxone extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
       <link rel="stylesheet" href="src/components/cart/cartboxone.css">
         <div class="cart-item">
        <img src="path/to/product-image.jpg" alt="Product Image">
        <div class="cart-item-details">
          <div class="cart-item-title">Product Title</div>
          <div class="cart-item-price">$19.99</div>
        </div>
        <div class="cart-item-actions">
          <button class="decrease-quantity">-</button>
          <span class="quantity">1</span>
          <button class="increase-quantity">+</button>
          <button class="remove-item">Remove</button>
        </div>
        <div class="cart-item-total">$19.99</div>
      </div>
      `;
    }
  }
  
  customElements.define("cart-box-one", cratboxone)
  