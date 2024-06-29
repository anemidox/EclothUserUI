import FooterCss from './FooterCss.js';

export default function Footer() {
    return (`
        ${FooterCss()}
            <footer class="footer-container">
                <h1>about</h1>
                <h1>contact</h1>
                <h1>privacy</h1>
                <h1>terms</h1>
                <h1>Hello World</h1>
            </footer>
        `)
}