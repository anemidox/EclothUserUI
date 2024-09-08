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
    },
    // Dynamic route example for removing the trailing slash
    "/User": {
        template: Home,
        title: `User | ${urlPageTitle}`,
        description: "User Details",
    },
};

// Create a route matcher function with regex support
const matchRoute = (path) => {
    // Normalize path: remove trailing slashes if present
    path = path.replace(/\/$/, "");

    // Check for exact match first
    if (routes[path]) {
        return routes[path];
    }

    // Check for dynamic route patterns
    const matchedRoute = Object.entries(routes).find(([routePath]) => {
        const routePattern = new RegExp(`^${routePath.replace(/:\w+/g, '\\w+')}$`);
        return routePattern.test(path);
    });

    // Return matched route or 404 if no match
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
    let path = window.location.pathname || "/";
    
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
