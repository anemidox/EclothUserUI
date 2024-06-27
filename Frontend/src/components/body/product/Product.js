import ProductCss from './ProductCss.js';

export default function Product() {

  fetch('https://fakestoreapi.com/products')
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        const markup = `<img src="${user.image}" height="100px width="100">`;

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