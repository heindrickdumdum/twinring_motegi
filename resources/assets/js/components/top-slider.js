import Swiper from 'swiper/dist/js/swiper.js';

export default function topSlider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const sectionPage = document.querySelectorAll('.swiper-pagination-section');

  sectionPage.forEach( sec => {
    const defaultOptions = {
      speed: 1500,
      slidesPerView: 'auto',
      variableWidth: 'auto',
      spaceBetween: 55,
      pagination: {
        el: sec,
        type: 'bullets',
        clickable: true,
      },

      breakpoints: {
        1280: {
          slidesPerGroup: 3
        },
        375: {
          spaceBetween: 10,
          slidesPerGroup: 1,
          slidesPerView: 1,
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

  });

}
