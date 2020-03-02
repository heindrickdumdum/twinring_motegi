import Swiper from 'swiper/dist/js/swiper.js';

export default function topFeatureSlider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const defaultOptions = {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: 'auto',
    spaceBetween: 55,
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
      1280: {
        slidesPerGroup: 3
      },
      759: {
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
