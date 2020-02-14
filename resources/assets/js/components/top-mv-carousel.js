export default function topMvCarousel() {
  const slides = document.querySelectorAll('.js-mv-item');
  const firstSlide = document.querySelector('.js-mv-item-first');

  setTimeout(() => {
    let currentIndex = 0;

    firstSlide.classList.add('is-active');

    setInterval(() => {
      slides.forEach((slide) => slide.classList.remove('is-active'));
      firstSlide.classList.remove('is-active');

      currentIndex++;

      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }

      slides[currentIndex].classList.add('is-active');

    }, 4500);
  }, 3500);
}
