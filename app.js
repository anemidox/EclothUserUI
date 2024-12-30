import { AppHeader } from './src/common/Header.js';
import { urlLocationHandler } from './src/router/router.js';
// import { FooterApp } from './src/common/Footer.js'; not yet implemented

const app = () => {
    document.body.innerHTML = `
        ${AppHeader()}
        <div id="app"></div>

    `;
};

export default app;
