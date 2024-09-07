// Import page components
import Home from '../pages/Home.js';
// import Product from '../pages/Product.js'; // Example dynamic route
// import NotFound from '../pages/NotFound.js'; // Custom 404 component

const urlPageTitle = "E Cloth";

// Define routes with dynamic route support
const routes = {
    // 404: {
    //     template: NotFound,
    //     title: `404 | ${urlPageTitle}`,
    //     description: "404 Not Found",
    // },
    "/": {
        template: Home,
        title: `Home | ${urlPageTitle}`,
        description: "Home",
    },
    // "/product/:id": {
    //     template: Product,
    //     title: `Product | ${urlPageTitle}`,
    //     description: "Product Details",
    // },
};

// Create a route matcher function with regex support
const matchRoute = (path) => {
    const matchedRoute = Object.entries(routes).find(([routePath]) => {
        const routePattern = new RegExp(`^${routePath.replace(/:\w+/, '\\w+')}\/?$`);
        return routePattern.test(path);
    });
    return matchedRoute ? matchedRoute[1] : routes[404];
};

// Handle navigation clicks
document.addEventListener("click", (event) => {
    const { target } = event;
    if (target.tagName === 'A' && target.href) {
        event.preventDefault();
        const path = new URL(target.href).pathname;
        navigateTo(path);
    }
});

// Function to handle route changes and update the document
export const urlLocationHandler = async () => {
    const path = window.location.pathname || "/";
    const { template, title, description } = matchRoute(path);

    try {
        // Ensure template is a function and awaits its result
        const content = typeof template === 'function' ? await template() : template;

        // Update content and metadata
        const appElement = document.getElementById("app");
        if (appElement) {
            appElement.innerHTML = content;
            document.title = title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.content = description;
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        } else {
            console.error('Element with id "app" not found.');
        }
    } catch (error) {
        console.error('Error handling route:', error);
        const appElement = document.getElementById("app");
        if (appElement) {
            appElement.innerHTML = '<h1>Something went wrong</h1>';
        }
    }
};

// Handle browser navigation (back/forward buttons)
window.onpopstate = urlLocationHandler;

// Initialize routing on page load
urlLocationHandler();

// Navigate to a new path
export function navigateTo(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent('popstate'));
}
