const style = document.createElement('style');
style.textContent = `
/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.feedback-section {
  text-align: center;
  width: 80%;
  margin: auto;
}

.feedback-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #355e3b;
}

.feedback-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.feedback-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;
  opacity: 0.7;
}

.feedback-card.active {
  transform: scale(1);
  opacity: 1;
  background: #d8f3dc;
}

.feedback-card .quote {
  font-size: 2rem;
  color: #355e3b;
}

.feedback-card h3 {
  font-size: 1.2rem;
  color: #355e3b;
  margin-bottom: 1rem;
}

.feedback-card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
}

.navigation {
  margin-top: 1.5rem;
}

.navigation button {
  background: #355e3b;
  border: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.navigation button:hover {
  background: #469960;
}


`;

const template = document.createElement('template');
template.innerHTML = `
    <section class="feedback-section">
    <h2>Feedback Corner</h2>
    <div class="feedback-container">
      <div class="feedback-card">
        <p class="quote">“</p>
        <h3>Emily Wilson</h3>
        <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
      </div>
      <div class="feedback-card active">
        <p class="quote">“</p>
        <h3>Sarah Thompson</h3>
        <p>I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!</p>
      </div>
      <div class="feedback-card">
        <p class="quote">“</p>
        <h3>Olivia Martinez</h3>
        <p>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
      </div>
    </div>
    <div class="navigation">
      <button class="prev">❮</button>
      <button class="next">❯</button>
    </div>
  </section>
`;

class FeedBack extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Optional: Any additional setup when the component is added to the DOM
        // script.js
const cards = document.querySelectorAll(".feedback-card");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 1;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active");
    if (index === currentIndex) {
      card.classList.add("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCards();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards();
});

// Initialize the first card
updateCards();

    }
}

customElements.define('app-feedback',FeedBack);

export {FeedBack};
