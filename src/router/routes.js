import Home from '../pages/Home.js';
import Category from '../pages/Category.js';

const urlPageTitle = "E Cloth";

const routes = {
    "/": {
        template: Home,
        title: `Home | ${urlPageTitle}`,
        description: "Home",
    },
    "/category": {
        template: Category,
        title: `Category | ${urlPageTitle}`,
        description: "Category Details",
    },
    404: {
        template: '<h1>404 Not Found</h1>',
        title: `404 | ${urlPageTitle}`,
        description: "Page Not Found",
    }
};

// Function to normalize the path
const normalizePath = (path) => {
    return path.replace(/\/+$/, '') || '/';
};

// Route matcher function with regex support
const matchRoute = (path) => {
    path = normalizePath(path);

    if (routes[path]) {
        return routes[path];
    }

    const matchedRoute = Object.entries(routes).find(([routePath]) => {
        const routePattern = new RegExp(`^${routePath.replace(/:\w+/g, '\\w+')}$`);
        return routePattern.test(path);
    });

    return matchedRoute ? matchedRoute[1] : routes[404];
};

// Handle route changes
export const urlLocationHandler = async () => {
    let path = window.location.pathname || "/";
    path = normalizePath(path);

    const route = matchRoute(path);
    const { template = '<h1>Something went wrong</h1>', title = `Error | ${urlPageTitle}`, description = "An error occurred" } = route;

    try {
        const content = typeof template === 'function' ? await template() : template;
        const appElement = document.getElementById("app");
        if (appElement) {
            appElement.innerHTML = content;
            document.title = title;
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;
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
