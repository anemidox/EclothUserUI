import { Name } from '../components/header/Name.js';
import { Logo } from '../components/header/Logo.js';
import { Search } from '../components/header/Search.js';
import { Return } from '../components/header/Return.js';
import { Login } from '../components/header/Login.js';
import { Cart } from '../components/header/Cart.js';
import { navigateTo } from '../../router/router.js';

window.navigateTo = navigateTo;

const header = () => {
    return (`
    <link rel="stylesheet" href="src/common/header.css">
        <header class="header-container">
            <nav class="main-nav">
                <ul class="main-list">
                    <li class="list-item item-one">
                        <a href="#/" onclick="navigateTo('/')">
                            <app-logo></app-logo>
                        </a>
                    </li>
                    <li class="list-item item-two">
                        <a href="#/" onclick="navigateTo('/')">
                            <app-name></app-name>
                        </a>
                    </li>
                    <li class="list-item item-tree">
                        <app-search></app-search>
                    </li>
                    <li class="list-item item-four">
                        <a href="#/returnitem" onclick="navigateTo('/returnitem')">
                            <app-return></app-return>
                        </a>
                    </li>
                    <li class="list-item item-five">
                        <a href="#/signin" onclick="navigateTo('/signin')">
                            <app-login></app-login>
                        </a>
                    </li>
                    <li class="list-item item-six">
                        <a href="#/cart" onclick="navigateTo('/cart')">
                            <app-cart></app-cart>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `);
}

export default header;