export default function CarouselCss() {
    return (`
        <style>
            .carousel-container {
                position: relative;
                width: 80%;
                margin: 20px auto;
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .carousel {
                display: flex;
                transition: transform 0.5s ease-in-out;
            }

            .carousel-item {
                min-width: 100%;
                padding: 20px;
                box-sizing: border-box;
                background-color: #ffffff;
                text-align: center;
                font-family: Arial, sans-serif;
            }

            .carousel-button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(0, 0, 0, 0.5);
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 10px;
                border-radius: 50%;
                user-select: none;
            }

            .carousel-button.prev {
                left: 10px;
            }

            .carousel-button.next {
                right: 10px;
            }

            .carousel-button:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
        </style>
    `);
}
