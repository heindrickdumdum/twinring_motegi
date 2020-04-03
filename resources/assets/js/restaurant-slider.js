import slider from './components/slider';

slider({//restaurant page
  id: 'restaurantSlider',
  target: '.js-slider-restaurant-marcherant, .js-slider-restaurant-toya, .js-slider-restaurant-oak, .js-slider-restaurant-granturismo, .js-slider-restaurant-forestkitchen, .js-slider-restaurant-rocco',
  options: {
    autoplay: {
      delay: 2500,
      disableOnIteraction: true
    },
    speed: 1000,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      749: {
        autoplay: {
          delay: 2500,
          disableOnIteraction: true
        },
        speed: 1000,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
});
