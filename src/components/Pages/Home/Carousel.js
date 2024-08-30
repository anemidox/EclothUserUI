const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('src/assets/style/pages/Home/MainCarousel.css');
    </style>
    <div class="main-carousel">
        <h2>Beautiful Carousel</h2>
        <div class="carousel-container">
            <div class="carousel-items">
                <!-- Images will be added here dynamically -->
            </div>
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    </div>
`;

export class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const clone = template.content.cloneNode(true);
        this.shadowRoot.append(clone);
    }

    connectedCallback() {
        this.initCarousel();
    }

    initCarousel() {
        const carouselItems = this.shadowRoot.querySelector('.carousel-items');
        const prevButton = this.shadowRoot.querySelector('.prev');
        const nextButton = this.shadowRoot.querySelector('.next');
        let index = 0;

        this.loadImages().then(images => {
            images.forEach(image => {
                const slide = document.createElement('div');
                slide.classList.add('carousel-slide');
                slide.innerHTML = `
                    <img src="${image.url}" alt="${image.title}">
                    <p>${image.title}</p>
                    <p>${image.id}</p>
                `;
                carouselItems.appendChild(slide);
            });

            const slides = this.shadowRoot.querySelectorAll('.carousel-slide');
            showSlide(index);

            prevButton.addEventListener('click', () => {
                index = (index > 0) ? index - 1 : slides.length - 1;
                showSlide(index);
            });

            nextButton.addEventListener('click', () => {
                index = (index < slides.length - 1) ? index + 1 : 0;
                showSlide(index);
            });

            function showSlide(i) {
                slides.forEach((slide, idx) => {
                    slide.style.display = idx === i ? 'block' : 'none';
                });
            }
        });
    }

    async loadImages() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        // Select a subset of images for demonstration
        return data.slice(0, 10).map(img => ({
            url: img.url,
            title: img.title,
            id: img.id
        }));
    }
}

customElements.define('main-carousel', Carousel);
