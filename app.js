import { Header } from "./src/common/Header.js";
import { router } from "./src/router/router.js";
import { Footer } from "./src/common/Footer.js";

const app = () => {
    return (`
        <my-header></my-header>
        <div id="app"></div>
        <my-footer></my-footer>
    `);
}

export default app;
