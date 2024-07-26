import { Name } from '../components/header/Name.js';
import { Logo } from '../components/header/Logo.js';
import { Search } from '../components/header/Search.js';
import { Return } from '../components/header/Return.js';
import { Login } from '../components/header/Login.js';
import { Cart } from '../components/header/Cart.js';

const header = () => {
    return (`
    <link rel="stylesheet" href="src/common/header.css">
        <header class="header-container">
            <nav class="main-nav">
                <ul class="main-list">
                    <li class="list-item item-one">
                        <app-logo></app-logo>
                    </li>
                    <li class="list-item item-two">
                        <app-name></app-name>
                    </li>
                    <li class="list-item item-tree">
                        <app-search></app-search>
                    </li>
                    <li class="list-item item-four">
                        <app-return></app-return>
                    </li>
                    <li class="list-item item-five">
                        <app-login></app-login>
                    </li>
                    <li class="list-item item-six">
                        <app-cart></app-cart>
                    </li>
                </ul>
            </nav>
        </header>
    `);
}

export default header;