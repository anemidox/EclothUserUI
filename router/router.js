// Header Link...
import Home from '../src/pages/home.js';
import ReturnItem from '../src/pages/return.js';
import Signin from '../src/pages/signin.js';
import Cart from '../src/pages/cart.js';
import ProductList from '../src/pages/productList.js';
// Footer Link...
import AboutUs from '../src/pages/footer/company/aboutus.js';
import OurService from '../src/pages/footer/company/ourservice.js';
import privacy from '../src/pages/footer/company/privacy.js';
import Seller from '../src/pages/footer/company/seller.js';

import Faq from '../src/pages/footer/gethelp/faq.js';
import OrderStatus from '../src/pages/footer/gethelp/orderstartus.js';
import Returns from '../src/pages/footer/gethelp/returns.js';
import Shippings from '../src/pages/footer/gethelp/shippings.js';
import PaymentOption from '../src/pages/footer/gethelp/paymentoption.js';
import EmailData from '../src/pages/footer/contactus/emaildata.js';
import Phone from '../src/pages/footer/contactus/phone.js';

const routes = {
  // Header...
  '/': Home,
  '/returnitem': ReturnItem,
  '/signin': Signin,
  '/cart': Cart,
  '/productlist' : ProductList,

  // Footer...
  '/about': AboutUs,
  '/ourservice': OurService,
  '/privacy': privacy,
  '/seller': Seller,

  '/faq': Faq,
  '/orderstatus': OrderStatus,
  '/returns': Returns,
  '/shippings': Shippings,
  '/paymentoption': PaymentOption,
  '/email': EmailData,
  '/phone': Phone,
};

function router() {
  const path = window.location.hash.replace('#', '') || '/';
  const view = routes[path] || Home;
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = view();
  } else {
    console.error("Element with ID 'app' not found");
  }
}

function navigateTo(path) {
  window.location.hash = path;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export { router, navigateTo };
