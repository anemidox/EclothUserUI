const iconPath = ('src/assets/icons/return.png');

const style = document.createElement('style');
style.textContent = `
/* From Uiverse.io by mrhyddenn */ 
.button {
     margin-top:23px;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 4px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  transition: all .15s ease;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

/* Mobile (max-width: 480px) */
@media (max-width: 480px) {
  .button {
    font-size: 16px; /* Larger font size for better readability */
    padding: 10px;   /* More padding for easier tapping */
  }
}

/* Tablet (max-width: 768px) */
@media (max-width: 768px) {
  .button {
    font-size: 14px; /* Slightly smaller font size for tablets */
    padding: 8px;    /* Adjust padding for tablets */
  }
}

/* PC/Desktop (min-width: 769px) */
@media (min-width: 769px) {
  .button {
    font-size: 12px; /* Default font size for desktops */
    padding: 6px;    /* Default padding for desktops */
  }
}


`;

const template = document.createElement('template');
template.innerHTML = `
   <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Return</span>
    </span>
</button>
`;

class Return extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        // Additional setup if needed
    }
}

customElements.define('app-return', Return);

export { Return };
