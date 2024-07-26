import Home from '../src/pages/home.js';
import About from '../src/pages/about.js';
import Contact from '../src/pages/contact.js';
import ReturnItem from '../src/pages/returns.js';
import Signin from '../src/pages/signin.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/returnitem': ReturnItem,
  '/signin': Signin,
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
