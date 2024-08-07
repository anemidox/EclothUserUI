import Home from '../src/pages/home.js';
import ReturnItem from '../src/pages/return.js';
import Signin from '../src/pages/signin.js';
import Cart from '../src/pages/cart.js';
import ProductList from '../src/pages/productList.js';
// Footer Link...
import AboutUs from '../src/pages/footer/aboutus.js';
import OurService from '../src/pages/footer/ourservice.js';
import privacy from '../src/pages/footer/privacy.js';

const routes = {
  '/': Home,
  '/returnitem': ReturnItem,
  '/signin': Signin,
  '/cart': Cart,
  '/productlist' : ProductList,

  // Footer...
  '/aboutus': AboutUs,
  '/ourservice': OurService,
  '/privacypolicy': privacy,
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
