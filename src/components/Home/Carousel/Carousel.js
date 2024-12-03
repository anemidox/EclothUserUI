import { Header } from "../../../common/Header.js";

const template = document.createElement('template');
template.innerHTML = `
<div class="background-container">
    <app-header class="header-overlay"></app-header>
    <video id="video-player" class="background-image" autoplay muted loop>
        <source src="/src/assets/video/6008256_4k_Attractive_3840x2160.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
<div class="overlay-content">
    <h1 class="text">Wear the Trend, Own the Moment</h1>
    <p class="button">Elevate Your Style with Effortless Elegance.</p>
    <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;SHOP&nbspNOW&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;SHOP&nbspNOW&nbsp;</span>
    </button>
</div>
</div>

`;

const style = document.createElement('style');
style.textContent = `
.background-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.header-overlay {
    position: absolute; /* Position the header over the video */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2; /* Ensure it is above the video */
    color: white; /* Make text readable over the video */
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Optional: Add shadow for better separation */
    /* From https://css.glass */
    background: rgba(182, 194, 132, 0.03);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.4px);
    -webkit-backdrop-filter: blur(4.4px);
}

.overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 1; /* Below the header but above the video */
}

.overlay-content p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color:wihte; 
}

}

.overlay-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.overlay-button:hover {
    background-color: rgba(255, 255, 255, 1);
}  

/* From Uiverse.io by satyamchaudharydev */ 
/* === removing default button style ===*/
.button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #37FF8B;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}

//video animation

#video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Hide the overflowing videos */
}
   .text{
    position:relative;
    right:-370px;
    top:-3px;
    font-size: 110px;
    text-align:right;
    magin:0;
    line-height: 1.2;
    --border-right: 10px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    -webkit-text-stroke: 2px var(--text-stroke-color);
     color:rgba(32, 234, 135, 0.02);
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
        const videoPlayer = this.shadowRoot.querySelector('#video-player'); // Access the element in the shadow DOM
        const videos = [
            "/src/assets/video/6008256_4k_Attractive_3840x2160.mp4",
            "/src/assets/video/4911645_Woman_Traveler_3840x2160.mp4",
            "/src/assets/video/3015510-hd_1920_1080_24fps.mp4",
        ];
    
        let currentVideoIndex = 0;
    
        // Function to play the next video
        const playNextVideo = () => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop back to the first video
            videoPlayer.src = videos[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
            pa
        };
    
        // // Event listener for click to play the next video
        videoPlayer.addEventListener('ended', playNextVideo);
    
        // Event listener for video ending to automatically play the next video
        videoPlayer.addEventListener('click', playNextVideo);
    
        // Start playing the first video automatically when the component loads
        videoPlayer.src = videos[currentVideoIndex];
        videoPlayer.play();


        // setInterval(playNextVideo, 10000);
    }
    
    
}

customElements.define('carousel-box', Carousel);

export default Carousel;