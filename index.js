// Carousel functionality
let currentSlideIndex = 1;
showSlide(currentSlideIndex);

// Auto-play carousel every 5 seconds
setInterval(() => {
  moveCarousel(1);
}, 5000);

function moveCarousel(n) {
  showSlide((currentSlideIndex += n));
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentSlideIndex - 1].classList.add("active");
  dots[currentSlideIndex - 1].classList.add("active");
}

// Touch/Swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

const carouselWrapper = document.querySelector('.carousel-wrapper');

carouselWrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselWrapper.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50; // Minimum swipe distance in pixels
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swiped left - go to next slide
    moveCarousel(1);
  }
  
  if (touchEndX > touchStartX + swipeThreshold) {
    // Swiped right - go to previous slide
    moveCarousel(-1);
  }
}
