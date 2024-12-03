const iconpath = ('src/assets/icons');

const style = document.createElement('style');
style.textContent = `
.inputBox_container {
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  width: 850px;
  height: 38px;
  background-color: #5c6370;
  border-radius: 0.8em;
  overflow: hidden;
  /* From https://css.glass */
background: rgba(153, 149, 149, 0.74);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(153, 149, 149, 1);
}

/* Icon styling */
.search_icon {
  height: 1em;
  padding: 0 0.5em 0 0.8em;
  fill: #abb2bf;
}

/* Input box styling */
.inputBox {
  background-color: transparent;
  color: black;
  outline: none;
  width: 100%;
  border: 0;
  padding: 0.5em 1.5em 0.5em 0;
  font-size: 1em;
}

::placeholder {
  color: black;
  text-weight: bold;
  text-align: center;
  font-size:20px;
  font-family:impact;
  padding-top:15px;
}

/* Media Queries */

/* Mobile Devices */
@media (max-width: 480px) {
  .inputBox_container {
    width: 100%;
    flex-direction: column;
  }

  .search_icon {
    padding: 0.5em;
    height: 1.2em;
  }

  .inputBox {
    padding: 0.5em 1.5em;
    font-size: 0.9em;
    background-color:b
  }
}

/* Tablets */
@media (max-width: 768px) {
  .inputBox_container {
    width: 90%;
  }

  .search_icon {
    padding: 0.5em;
    height: 1.1em;
  }

  .inputBox {
    padding: 0.5em 1.5em;
    font-size: 1em;
  }
}

/* Large Screens */
@media (min-width: 1024px) {
  .inputBox_container {
    width: 800px;
  }

  .search_icon {
    height: 1em;
  }

  .inputBox {
    font-size: 1em;
  }
}


`;

const template = document.createElement('template');
template.innerHTML = `
<div class="inputBox_container">
  <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
  </svg>
  <input class="inputBox" id="inputBox" type="text" placeholder="Search For Products">
</div>
`;

class Searchbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        // Any additional logic or event listeners can go here
    }
}

customElements.define('app-searchbar', Searchbar);

export { Searchbar };
