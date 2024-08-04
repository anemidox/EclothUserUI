export class BoxColor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="src/components/signin/BoxColor.css">
      <div class="signin-container">
        <h2>Sign In</h2>
        <h2>git check<h2>
        <form id="signin-form">
          <label for="email">Email or mobile phone number</label>
          <input type="email" id="email" name="email" required>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
          <hr>
          <button type="submit">Sign In</button>

          <div class="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
        </form>
        <div class="create-account">
          <p>New to Amazon?</p>
          <a href="#">Create your Amazon account</a>
        </div>
      </div>
    `;
  }
}

customElements.define("box-color", BoxColor);
