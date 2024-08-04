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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
        <footer class="footer-container">
        <div class="box-footer">
          <div class="footer-row">
            <div class="footer-logo">
               <img src="public/icon/logo.png" alt="Logo">
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our services</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  
              </ul>
            </div>
            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Order Status</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shippings</a></li>
                  <li><a href="#">Payment Options</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact us</h4>
              <ul>
                  <li><a href="#">E-mail</a></li>
                  <li><a href="#">Telephone</a></li>
                  
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow Us</h4>
              <div class="social-links">
                  <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                  <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                  
              </div>
            </div>
          </div>
          <div class="footer-col copyright-col">
            <p>&copy; 2024 Pill Prime. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define('box-footer', BoxFooter);
  