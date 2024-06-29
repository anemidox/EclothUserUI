import Logo from './logo/Logo.js';
import SearchBar from './searchbar/SearchBar.js';
import SignUp from './signup/SignUp.js';
import SignIn from './signin/SignIn.js';
import Cart from './cart/Cart.js';
import MainNavCss from './MainNavCss.js';

export default function MainNav() {
    return (`
        ${MainNavCss()}
        <div class="main-nav">
            ${Logo()}
            ${SearchBar()}
            <div class="auth-cart">
                ${SignUp()}
                ${SignIn()}
                ${Cart()}
            </div>
        </div>
    `);
}
