import { MainPage } from "../components/home/MainPage.js";

const home = () => {
    return (`
    <link rel="stylesheet" type="text/css" href="./src/pages/home.css">
        <div class="home">
            <main-page></main-page>
        </div>
    `);
}

export default home;