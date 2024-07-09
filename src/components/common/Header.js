import { Logo } from './Header/Logo.js';
import { Name } from './Header/Name.js';
import { Return } from './Header/Return.js';
import { Search } from './Header/Search.js';
import { SignIn } from './Header/SignIn.js';
import { Cart } from './Header/Cart.js';

export class Header extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/common/Header.css">
                <div class="app-header">
                    <div id="logo"><app-logo></app-logo></div>
                <div id="home"><app-name></app-name></div>
                <div id="search-bar">
                    <app-search></app-search>
                </div>
                <div id="return"><app-return></app-return></div>
                <div id="login"><app-sign-in></app-sign-in></div>
                <div id="cart"><app-cart></app-cart></div>
                </div>
        `;

        this.shadowRoot.querySelector('#logo').addEventListener('click', () => {
            console.log('Logo Clicked');
        });
        this.shadowRoot.querySelector('#home').addEventListener('click', () => {
            console.log('Home Clicked');
        });
        this.shadowRoot.querySelector('#return').addEventListener('click', () => {
            console.log('Return Clicked');
        });
        this.shadowRoot.querySelector('#login').addEventListener('click', () => {
            console.log('Login Clicked');
        });
        this.shadowRoot.querySelector('#cart').addEventListener('click', () => {
            console.log('Cart Clicked');
        });
    }
}

customElements.define('app-header', Header);