import { Header } from './src/common/Header.js';
import { urlLocationHandler } from './src/router/router.js';
import { Footer } from './src/common/Footer.js';

const app = () => {
    return (`
        <div>   
            <app-header></app-header>
            <div id="app"></div>
            
        </div>
    `);
}

export default app;
