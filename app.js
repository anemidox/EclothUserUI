import header from "./src/common/header.js";
import { router } from "./router/router.js";
import footer from "./src/common/footer.js";

const app = () => {
    return `
    <link rel="stylesheet" href="app.css">
        ${header()}
        <div id="app"></div>
        ${footer()}
    `;
}

export default app;
