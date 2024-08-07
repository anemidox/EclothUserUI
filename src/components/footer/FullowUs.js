export class FullowUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                }

                .fullowus {
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                h3 {
                    margin-bottom: 15px;
                    color: #333;
                    font-size: 1.5em;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    gap: 15px;
                }

                li {
                    margin: 0;
                }

                a {
                    display: block;
                    width: 30px;
                    height: 30px;
                    transition: transform 0.3s, opacity 0.3s;
                }

                a:hover {
                    transform: scale(1.1);
                    opacity: 0.8;
                }

                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            </style>

            <div class="fullowus">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/icon/socialmedia/facebook.png" alt="Facebook">
                    </a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/icon/socialmedia/instagram.png" alt="Instagram">
                    </a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/icon/socialmedia/twitterx.png" alt="Twitter">
                    </a></li>
                    <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/icon/socialmedia/pinterest.png" alt="Pinterest">
                    </a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/icon/socialmedia/youtube.png" alt="YouTube">
                    </a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('fullow-us-footer', FullowUs);
