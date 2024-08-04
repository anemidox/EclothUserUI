export class BoxFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="src/components/footer/BoxFooter.css">
        <div class="box-footer">
          <div class="footer-logo">
            
          </div>
          <div class="footer-column">
            <h4>Get to Know Us</h4>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Amazon</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Amazon Devices</a></li>
              <li><a href="#">Amazon Science</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Make Money with Us</h4>
            <ul>
              <li><a href="#">Sell products on Amazon</a></li>
              <li><a href="#">Sell apps on Amazon</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Advertise Your Products</a></li>
              <li><a href="#">Self-Publish with Us</a></li>
              <li><a href="#">Host an Amazon Hub</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Amazon Payment Products</h4>
            <ul>
              <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
              <li><a href="#">Amazon Store Card</a></li>
              <li><a href="#">Amazon Secured Card</a></li>
              <li><a href="#">Amazon Business Card</a></li>
              <li><a href="#">Amazon Business Line of Credit</a></li>
              <li><a href="#">Shop with Points</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Let Us Help You</h4>
            <ul>
              <li><a href="#">Amazon and COVID-19</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Your Orders</a></li>
              <li><a href="#">Shipping Rates & Policies</a></li>
              <li><a href="#">Returns & Replacements</a></li>
              <li><a href="#">Manage Your Content and Devices</a></li>
              <li><a href="#">Amazon Assistant</a></li>
              <li><a href="#/aboutus" onclick="/aboutus">Help</a></li>
            </ul>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('box-footer', BoxFooter);
  