const style = document.createElement('style');
style.textContent = `
 h1{
  padding: 5px 10px;
  background-color: rgba(62, 152, 163, 0.85);
  color: white;
  font-size: 1.5em;
  text-align: center;
  position: absolute; /* Position navbar relative to its parent */
  top: 0; /* Stick it to the top */
  left: 0;
  width: 100%;
  z-index: 10; /* Ensure it stays above the .category */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
    }

`;

const template = document.createElement('template');
template.innerHTML = `
    <h1>Our Proudout NavBar</h1>
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
