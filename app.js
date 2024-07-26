import header from "./src/common/header.js";
import home from "./src/pages/home.js";


const app = () => {
    return `
    <link rel="stylesheet" href="app.css">
        ${header()}
        <div id="app"></div>
        ${home()}
    `;
}

export default app;
