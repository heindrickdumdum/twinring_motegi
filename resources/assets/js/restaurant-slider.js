import slider from './components/slider';

let options = {
  fadeEffect: { 
    crossFade: true 
  },
  virtualTranslate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  speed: 1000,
  slidesPerView: 1,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

slider({//restaurant page
  id: 'restaurantMarcherantSlider',
  target: '.js-slider-restaurant-marcherant',
  options: options
});

slider({//restaurant page
  id: 'restaurantToyaSlider',
  target: '.js-slider-restaurant-toya',
  options: options
});

slider({//restaurant page
  id: 'restaurantOakSlider',
  target: '.js-slider-restaurant-oak',
  options: options
});

slider({//restaurant page
  id: 'restaurantGranturismoSlider',
  target: '.js-slider-restaurant-granturismo',
  options: options
});

slider({//restaurant page
  id: 'restaurantForestkitchenSlider',
  target: '.js-slider-restaurant-forestkitchen',
  options: options
});

slider({//restaurant page
  id: 'restaurantRoccoSlider',
  target: '.js-slider-restaurant-rocco',
  options: options
});
