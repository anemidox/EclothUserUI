export class FullowUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

            <style>
                @import url('src/assets/style/Footer/Bar/FollowUs.css');
            </style>
            <div class="fullowus">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/icons/socialmedia/facebook.png" alt="Facebook">
                    </a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/icons/socialmedia/instagram.png" alt="Instagram">
                    </a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/icons/socialmedia/twitterx.png" alt="Twitter">
                    </a></li>
                    <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/icons/socialmedia/pinterest.png" alt="Pinterest">
                    </a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/icons/socialmedia/youtube.png" alt="YouTube">
                    </a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('fullow-us-footer', FullowUs);
