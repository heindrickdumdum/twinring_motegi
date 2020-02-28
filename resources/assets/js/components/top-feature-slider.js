import Swiper from 'swiper';

export default function topFeatureSlider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const defaultOptions = {
    speed: 1500,
    initialSlide: 2,
    slidesPerView: 'auto',
    variableWidth: 'auto',
    spaceBetween: 55,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1280: {
        initialSlide: 1,
        slidesPerGroup: 3
      },
      375: {
        spaceBetween: 10,
        initialSlide: 1,
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
