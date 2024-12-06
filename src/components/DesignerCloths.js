const iconPath = 'src/assets/images/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated.jpg';

const style = document.createElement('style');
style.textContent = `
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  overflow: hidden;
}

/* Section styles */
.designer-clothes {
  padding: 40px;
}

.section-title {
  font-size: 2.5em;
  color: #1a2b12;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 30px;
}

/* Cards container */
.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Card styles */
.card {
  background-color: #fff;
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: perspective(1000px) rotateY(0deg);
  transition: transform 0.6s, box-shadow 0.4s;
}

.card:hover {
  transform: perspective(1000px) rotateY(15deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  object-fit:cover;
}

.card-title {
  font-size: 1.5em;
  color: #1a2b12;
  margin: 20px 0 10px;
}

.card-description {
  font-size: 1em;
  color: #666;
  padding: 0 20px 20px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}


`;

const template = document.createElement('template');
template.innerHTML = `
 <section class="designer-clothes">
    <h1 class="section-title">Designer Clothes For You</h1>
    <p class="section-subtitle">
      Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
    </p>
    <div class="cards-container">
      <div class="card">
        <img src="${iconPath}" alt="Accessories" class="card-image">
        <h3 class="card-title">Accessories</h3>
        <p class="card-description">
          Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.
        </p>
      </div>
      <div class="card">
        <img src="${iconPath}" alt="Dresses" class="card-image">
        <h3 class="card-title">Dresses</h3>
        <p class="card-description">
          Explore a stunning range of designer dresses, including evening gowns and chic day dresses.
        </p>
      </div>
      <div class="card">
        <img src="${iconPath}" alt="Outerwear" class="card-image">
        <h3 class="card-title">Outerwear</h3>
        <p class="card-description">
          Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.
        </p>
      </div>
      <div class="card">
        <img src="${iconPath}" alt="Outerwear" class="card-image">
        <h3 class="card-title">Outerwear</h3>
        <p class="card-description">
          Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.
        </p>
      </div>
    </div>
  </section>
`;

class DesignerCloths extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Optional: Any additional setup when the component is added to the DOM
        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('mouseover', () => {
              card.style.transform = 'perspective(1000px) rotateY(15deg) scale(1.05)';
            });
          
            card.addEventListener('mouseout', () => {
              card.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
            });
          });
          
    }
}

customElements.define('app-desigercloths',DesignerCloths);

export {DesignerCloths};
