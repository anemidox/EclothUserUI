const template = document.createElement('template');
template.innerHTML = `
    <div class="background-container">
        <img src="https://thilakawardhana.com/cdn/shop/files/WEB-COVER_1.jpg?v=1723614117&width=1370" alt="Background Image" class="background-image">
        <div class="content">
            <button class="action-btn">Shop Now</button>
        </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .background-container {
        position: relative;
        width: 100%; /* Ensure container fits the width of the viewport */
        height: 500px; /* Fixed height */
        overflow: hidden; /* Hide any overflow */
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4); /* Semi-transparent background for content */
        margin: 0 auto;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure image covers the container without distortion */
        z-index: -1;
    }

    .content {
        position: relative;
        text-align: center;
        color: white;
        z-index: 1;
        padding: 1em; /* Add some padding to the content for better visibility */
    }

    .action-btn {
        background-color: #ffcc00;
        border: none;
        color: white;
        padding: 15px 30px;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    }

    .action-btn:hover {
        background-color: #ffaa00;
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    }

    .action-btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }

    @media (max-width: 768px) {
        .background-container {
            height: 400px; /* Adjust height for medium screens */
        }

        .action-btn {
            padding: 12px 24px;
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .background-container {
            height: 300px; /* Adjust height for smaller screens */
        }

        .action-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
        }
    }
`;

class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic can go here if needed
    }
}

customElements.define('carousel-box', Carousel);

export default Carousel;
