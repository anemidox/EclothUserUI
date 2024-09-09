import { Header } from './src/common/Header.js';
import { urlLocationHandler } from './src/router/routes.js';
import { Footer } from './src/common/Footer.js';

const app = () => {
    document.body.innerHTML = `
        <app-header></app-header>
        <div id="app"></div>
        
    `;
};

export default app;
