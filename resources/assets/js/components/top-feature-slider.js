import Swiper from 'swiper';

export default function topFeatureSlider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const defaultOptions = {
    speed: 1500,
    initialSlide: 1,
    slidesPerView: 'auto',
    variableWidth: 'auto',
    loop: false,
    longSwipes: true,
    spaceBetween: 55,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1280: {
        slidesPerGroup: 3
      },
      375: {
        spaceBetween: 10,
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
