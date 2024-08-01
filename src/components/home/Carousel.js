export class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.slides = [
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYXV0aWZ1bCUyMGxhbmRzY2FwZXN8ZW58MHx8fHwxNjI4NDAwNjQ3&ixlib=rb-1.2.1&q=80&w=2048',
            'https://images.unsplash.com/photo-1494202643030-211a6d7aaf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYXV0aWZ1bCUyMHNreXxlbnwwfHx8fDE2Mjg0MDA2NDc&ixlib=rb-1.2.1&q=80&w=2048',
            'https://images.unsplash.com/photo-1516110833967-0b5716d9c51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYXV0aWZ1bCUyMGZvcmVzdHxlbnwwfHx8fDE2Mjg0MDA2NDc&ixlib=rb-1.2.1&q=80&w=2048',
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYXV0aWZ1bCUyMGZsb3dlcnN8ZW58MHx8fHwxNjI4NDAwNjQ3&ixlib=rb-1.2.1&q=80&w=2048',
            'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYXV0aWZ1bCUyMHNlYXNjYXBlfGVufDB8fHx8MTYyODQwMDY0Nw&ixlib=rb-1.2.1&q=80&w=2048'
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
