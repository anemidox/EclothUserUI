import Product from './product/Product.js';

export default function Body() {
    return `
      <main>
        ${Product()}
      </main>
    `;
}