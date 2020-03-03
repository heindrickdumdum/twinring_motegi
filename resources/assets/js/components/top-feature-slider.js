import Swiper from 'swiper/dist/js/swiper.js';

export default function topFeatureSlider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const defaultOptions = {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 55,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-feature',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      749: {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },

    on: {
      resize: function() {
        this.params.observer = true;
      }
    }
  }

  const config = !params.options ? defaultOptions : params.options;
  params.id = new Swiper(params.target, config);
}
