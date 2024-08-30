import Home from "../pages/HomePage.js";
import MainCart from "../pages/HomeCart.js";
import Return from "../pages/Return.js";

const routes = {
    '/': Home,
    '/cart': MainCart,
    '/return': Return,
    // Add dynamic routes if needed
};

function router() {
    const path = window.location.pathname || '/';
    const view = routes[path] || Home;
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = view();
    } else {
        console.error("Element with ID 'app' not found");
    }
}

function navigateTo(path) {
    window.history.pushState({}, '', path);
    router();
}

// Event listeners for navigation
window.addEventListener('popstate', router);
window.addEventListener('load', router);

export { router, navigateTo };
