import ProductCss from './ProductCss.js';

export default function Product() {

  fetch('https://fakestoreapi.com/products')
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        const markup = `<><img src="${user.image}" width="200px" height="200px"></>`;

        document.querySelector('div').insertAdjacentHTML('beforeend', markup);
      })
    })
    .catch(error => console.log(error));

    return `
    ${ProductCss()}
      <section class="product">
        <div>
      </section>
    `;
  }