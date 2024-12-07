const iconPath = 'src/assets/images/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated.jpg';

const style = document.createElement('style');
style.textContent = `
.designer-clothes {
  padding: 40px;
  margin-top:0px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  overflow: hidden;
  border-radius: 16px;
  background-color:transparent;
  height:800px;
}

.cards {
  display: flex;
  flex-direction:row;
  gap: 15px;
  justify-content: center;
}

.cards .one {
  background-color:#d4f4e1;
}

.cards .two {
  background-color:#d4f4e1;
  color: black;
}

.cards .three {
  background-color:#d4f4e1;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 500px;
  width: 350px;
  border-radius: 10px;
  color: rgb(1, 1, 1);
  cursor: pointer;
  transition: 400ms;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}

 .section-title{
    font-size:60px;
    color:#1a4b2e;
    font-weight: bold;
    position: relative;
    display: inline-block;
    margin-bottom:20px;
    align-items: center;
    position: relative;
    left:300px;
    margin-top:60px;
  }
 
  .section-subtitle{
    color:#1a4b2e;
    font-size: 30px;
    text-align: center;
    margin-top:0;
  
  }

  .card .card-image {
  width:200px;
  height:70%;
  border-radius: 8px;
  margin-top:35px;
}

.card .card-tagline {
  font-size: 1.5rem;
  margin: 15px 0 10px;
  font-weight: bold;
  color: #333;
}

.card .card-description {
  font-size: 1rem;
  margin: 10px 20px;
  color: #555;
}

.card .card-button {
  background-color:#1a4b2e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 30px;
}

`;

const template = document.createElement('template');
template.innerHTML = `
 <section class="designer-clothes">
    <h1 class="section-title">Designer Clothes For You</h1>
    <p class="section-subtitle">
      Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
    </p>

  <div class="cards">
      <div class="card one">
          <img src="${iconPath}" alt="Product Image" class="card-image">
          <h2 class="card-tagline">Amazing Product</h2>
          <p class="card-description">This is a brief description of the amazing product that highlights its features.</p>
          <button class="card-button">Read More...</button>
      </div>
      <div class="card two">
         <img src="${iconPath}" alt="Product Image" class="card-image">
          <h2 class="card-tagline">Amazing Product</h2>
          <p class="card-description">This is a brief description of the amazing product that highlights its features.</p>
          <button class="card-button">Read More...</button>
      </div>
      <div class="card three">
          <img src="${iconPath}" alt="Product Image" class="card-image">
          <h2 class="card-tagline">Amazing Product</h2>
          <p class="card-description">This is a brief description of the amazing product that highlights its features.</p>
          <button class="card-button">Read More...</button>
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
