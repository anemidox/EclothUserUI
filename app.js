import header from './src/common/Header.js';
import footer from './src/common/Footer.js';

const app = () => {
    return (`
        <div>
            ${header()}
            <h1>App is working</h1>
            ${footer()}
        </div>
    `);
}

export default app;
