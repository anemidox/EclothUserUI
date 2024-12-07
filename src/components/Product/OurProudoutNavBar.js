const style = document.createElement('style');
style.textContent = `
 .nav-links{
    background-color:transparent;
    font-size:20px;
    text-align: center;
    position: absolute; /* Position navbar relative to its parent */
    left: 0;
    width: 100%;
    z-index: 10; /* Ensure it stays above the .category */
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top:30px; /* Add space between navbar and .category */
    font-family: 'impact';
    font-weight:900px;

    }

/* Link Styling */
.nav-links a {
    text-decoration: none;
    color:#1a4b2e; /* Change to your theme color */
    position: relative;
    transition: color 0.3s ease-in-out;
}

/* Hover Effect */
.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px; /* Position underline slightly below text */
    width: 0;
    height: 5px; /* Thickness of the underline */
    background-color:#1a4b2e; /* Change to your theme color */
    transition: width 0.3s ease-in-out;
}

/* On Hover */
.nav-links a:hover {
    color: #003215; /* Change color on hover */
}

.nav-links a:hover::after {
    width: 100%; /* Underline expands fully on hover */
}

`;

const template = document.createElement('template');
template.innerHTML = `
    <div class="nav-links">
    <a href="#sale">SALE</a>
    <a href="#hot">HOT</a>
    <a href="#new-arrivals">NEW ARRIVALS</a>
    <a href="#accessories">ACCESSORIES</a>
</div>

`;

class OurProudoutNavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Optional: Any additional setup when the component is added to the DOM
    }
}

customElements.define('app-proudect-nav',OurProudoutNavBar);

export {OurProudoutNavBar};
