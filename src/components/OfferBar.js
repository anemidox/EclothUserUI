const iconPath = 'src/assets/images/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated.jpg';

const style = document.createElement('style');
style.textContent = `
/* Offer container styling */
.offer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7f7f3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 50px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 1s ease-out, opacity 1s ease-out;
}

/* Offer container visible state */
.offer-container.visible {
  transform: translateX(0);
  opacity: 1;
}

/* Offer content styling */
.offer-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 120px;
}

/* Image section */
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.offer-image {
  width: 100%;
  border-radius: 10px;
}

/* Text section */
.text-section {
  flex: 2;
  color: #285e5a;
}

.text-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-section p {
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Countdown timer styling */
.countdown-timer {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.time-box {
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.time-box h3 {
  font-size: 1.5rem;
  margin: 0;
}

.time-box p {
  font-size: 0.8rem;
  margin: 0;
  color: #888;
}

/* Buy Now button */
.buy-now-btn {
  background-color: #285e5a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buy-now-btn:hover {
  background-color: #1f4947;
}
`;

const template = document.createElement('template');
template.innerHTML = `
  <div class="offer-container">
    <div class="offer-content">
      <div class="image-section">
        <img src="${iconPath}" alt="Exclusive Offer Image" class="offer-image" />
      </div>
      <div class="text-section">
        <h2>Exclusive Offer</h2>
        <p>
          Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
        </p>
        <div class="countdown-timer">
          <div class="time-box">
            <h3 id="days">00</h3>
            <p>Days</p>
          </div>
          <div class="time-box">
            <h3 id="hours">00</h3>
            <p>Hours</p>
          </div>
          <div class="time-box">
            <h3 id="minutes">00</h3>
            <p>Min</p>
          </div>
        </div>
        <button class="buy-now-btn">Buy Now</button>
      </div>
    </div>
  </div>
`;

class OfferBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const container = this.shadowRoot.querySelector('.offer-container');

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('visible'); // Add the visible class when in view
          } else {
            container.classList.remove('visible'); // Remove the visible class when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    observer.observe(this);
  }
}

customElements.define('app-offerbar', OfferBar);

export { OfferBar };

