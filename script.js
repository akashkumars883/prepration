const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let autoPlay = true;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    slide.style.display = index === slideIndex ? 'block' : 'none';
    if (index === slideIndex) {
      slide.classList.add('animate-in');
      setTimeout(() => {
        slide.classList.remove('animate-in');
      }, 500); // adjust the timeout to match the animation duration
    }
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

if (autoPlay) {
  setInterval(nextSlide, 3000); // adjust the interval to your liking
}

showSlide(currentSlide);