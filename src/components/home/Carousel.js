export class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.slides = [
            {src: 'https://via.placeholder.com/800x400?text=Slide+1', text: 'Welcome to Our New Collection'},
            {src: 'https://via.placeholder.com/800x400?text=Slide+2', text: 'Discover Our Latest Trends'},
            {src: 'https://via.placeholder.com/800x400?text=Slide+3', text: 'Shop Now and Save'},
            {src: 'https://via.placeholder.com/800x400?text=Slide+4', text: 'Explore Our New Arrivals'},
            {src: 'https://via.placeholder.com/800x400?text=Slide+5', text: 'Exclusive Offers Just for You'}
        ];
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/home/Carousel.css">
            <div class="carousel">
                <div class="carousel__slides">
                    ${this.slides.map(({src, text}) => `
                        <div class="carousel__slide">
                            <img src="${src}" alt="slide">
                            <div class="carousel__text">${text}</div>
                        </div>
                    `).join('')}
                </div>
                <button class="carousel__button carousel__button--prev">❮</button>
                <button class="carousel__button carousel__button--next">❯</button>
            </div>
        `;
    }

    connectedCallback() {
        this.prevButton = this.shadowRoot.querySelector('.carousel__button--prev');
        this.nextButton = this.shadowRoot.querySelector('.carousel__button--next');
        this.slidesContainer = this.shadowRoot.querySelector('.carousel__slides');
        this.totalSlides = this.slides.length;

        this.prevButton.addEventListener('click', () => this.showPrevSlide());
        this.nextButton.addEventListener('click', () => this.showNextSlide());

        this.startAutoSlide();
    }

    showPrevSlide() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.totalSlides - 1;
        this.updateSlidePosition();
    }

    showNextSlide() {
        this.currentIndex = (this.currentIndex < this.totalSlides - 1) ? this.currentIndex + 1 : 0;
        this.updateSlidePosition();
    }

    updateSlidePosition() {
        const slideWidth = this.slidesContainer.clientWidth;
        this.slidesContainer.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.showNextSlide(), 3000);
    }

    disconnectedCallback() {
        clearInterval(this.autoSlideInterval);
    }
}

customElements.define('app-carousel', Carousel);
