import ProductCss from './ProductCss.js';

export default function Product() {
  // Apply CSS
  document.head.insertAdjacentHTML('beforeend', ProductCss());

  // Fetch product data
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      // Select all flex-box elements
      const flexBoxes = document.querySelectorAll('.flex-box');

      // Iterate over each product and insert the image into the corresponding flex-box
      data.forEach((product, index) => {
        if (index < flexBoxes.length) {
          const markup = `<img src="${product.image}" alt="${product.title}">`;
          flexBoxes[index].innerHTML = markup;
        }
      });
    })
    .catch(error => console.log(error));

  // Return the HTML structure
  return `
    ${ProductCss()}
    <section class="product">
      <div class="flex-container-image">
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
        <div class="flex-box"></div>
      </div>
    </section>
  `;
}