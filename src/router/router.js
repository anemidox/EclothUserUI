import { routes, matchRoute } from './routes.js';

const appElementId = 'app'; // ID of the main container where content will be rendered

export const renderRoute = async (path) => {
    const route = matchRoute(path);
    const { component, template = '<h1>Something went wrong</h1>', title, description } = route;

    try {
        const content = typeof component === 'function' ? await component() : template;
        const appElement = document.getElementById(appElementId);

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
            console.error(`Element with id "${appElementId}" not found.`);
        }
    } catch (error) {
        console.error('Error handling route:', error);
        const appElement = document.getElementById(appElementId);
        if (appElement) {
            appElement.innerHTML = '<h1>Something went wrong</h1>';
        }
    }
};

export const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    renderRoute(path);
};

window.onpopstate = () => renderRoute(window.location.pathname);

export const initializeRouter = () => renderRoute(window.location.pathname);

document.addEventListener("click", (event) => {
    const { target } = event;
    if (target.tagName === 'A' && target.href) {
        event.preventDefault();
        const path = new URL(target.href).pathname;
        navigateTo(path);
    }
});
