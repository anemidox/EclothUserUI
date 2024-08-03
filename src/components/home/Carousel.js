export class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.slides = [
            'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg',
            'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg',
            'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
        ];
        

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/home/Carousel.css">
            <div class="carousel">
                <div class="carousel__slides">
                    ${this.slides.map(src => `
                        <div class="carousel__slide">
                            <img src="${src}" alt="slide">
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
        this.slidesContainer.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.slidesContainer.addEventListener('mouseleave', () => this.startAutoSlide());

        this.updateSlidePosition();
        window.addEventListener('resize', () => this.updateSlidePosition());
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

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }

    disconnectedCallback() {
        this.stopAutoSlide();
    }
}

customElements.define('app-carousel', Carousel);
