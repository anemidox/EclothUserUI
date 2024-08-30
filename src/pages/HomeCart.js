import { ProductHomeCart } from "../components/Pages/HomeCart/ProductHomeCart.js";

class HomeCart {
    constructor() {
        this.template = `
            <div class="first-row">
                <product-home-cart">
                    <img src="https://via.placeholder.com/150/92c952" alt="Product Home Cart Slot List0">
                </product-home-cart>

                <product-home-cart">
                    <img src="https://via.placeholder.com/150/771796" alt="Product Home Cart Slot List1">
                </product-home-cart>

                <product-home-cart">
                    <img src="https://via.placeholder.com/150/24f355" alt="Product Home Cart Slot List2">
                </product-home-cart>

                <product-home-cart">
                    <img src="https://via.placeholder.com/150/d32776" alt="Product Home Cart Slot List3">
                </product-home-cart>
            </div>
            
        `;
    }
}

const MainCart = () => {
    const homeCartInstance = new HomeCart();
    return `
        ${homeCartInstance.template}
    `;
}

export default MainCart;