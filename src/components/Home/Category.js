import SmallBox from './SmallBox.js';
import BigBox from './BigBox.js';

const template = document.createElement('template');
template.innerHTML = `
    <div class="category">
        <small-box id="small-box-1">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-2">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-3">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-4">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <big-box id="big-box-1">
            <div slot="big-box">
                <h1>Big Box1</h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-2">
            <div slot="big-box">
                <h1>Big Box2</h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-3">
            <div slot="big-box">
                <h1>Big Box3</h1>
                <img src="" alt="">
            </div>
        </big-box>
        <big-box id="big-box-4">
            <div slot="big-box">
                <h1>Big Box4</h1>
                <img src="" alt="">
            </div>
        </big-box>
        <small-box id="small-box-5">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-6">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-7">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
        <small-box id="small-box-8">
            <div slot="small-box">
                <h1></h1>
                <img src="" alt="">
            </div>
        </small-box>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .category {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.5em;
    }

    :host(category-box) {
        display: block;
        background-color: lightgrey;
    }

    big-box {
        background-color: red;
        max-height: 600px;
        max-width: 300px;
    }

    big-box img {
        width: 100%;
        height: auto;
    }

    small-box {
        background-color: green;
        max-height: 500px;
        max-width: 300px;
    }

    small-box img {
        width: 100%;
        height: auto;
    }
`;

class CategoryBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style.cloneNode(true));  
        this.shadowRoot.appendChild(template.content.cloneNode(true)); 
    }

    connectedCallback() {
        this.fetchData();
        this.fetchTestData();
    }

    async fetchTestData() {
        try {
            const response = await fetch('https://api.anemidox.live/api/v1/controllers/OrderController.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            if (!Array.isArray(data)) {
                throw new Error('Data is not an array');
            }
            
            console.log('Fetched Data:', data);
            this.renderOrderData(data);
            
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    
    async fetchData() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.renderProductData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderOrderData(data) {
        // Ensure we have at least one item
        if (data.length < 1) {
            console.error('No order data available.');
            return;
        }

        // Example of rendering order data into specific boxes
        const smallBox1 = this.shadowRoot.querySelector('#small-box-1');
        smallBox1.querySelector('h1').textContent = `Order ID: ${data[0].total_price}`;
        smallBox1.querySelector('img').src = ''; // Assuming no image for order data
    }

    renderProductData(data) {
        if (data.length < 12) {
            console.error('Not enough product data available.');
            return;
        }

        // Small Boxes
        //this.updateBox('#small-box-1', data[0]);
        this.updateBox('#small-box-2', data[1]);
        this.updateBox('#small-box-3', data[2]);
        this.updateBox('#small-box-4', data[3]);
        this.updateBox('#small-box-5', data[8]);
        this.updateBox('#small-box-6', data[9]);
        this.updateBox('#small-box-7', data[10]);
        this.updateBox('#small-box-8', data[11]);

        // Big Boxes
        this.updateBox('#big-box-1', data[4]);
        this.updateBox('#big-box-2', data[5]);
        this.updateBox('#big-box-3', data[6]);
        this.updateBox('#big-box-4', data[7]);
    }

    updateBox(selector, item) {
        const box = this.shadowRoot.querySelector(selector);
        if (box) {
            box.querySelector('h1').textContent = item.title || 'No title';
            box.querySelector('img').src = item.image || '';
        } else {
            console.error(`Box not found: ${selector}`);
        }
    }
}

customElements.define('category-box', CategoryBox);

export default CategoryBox;
