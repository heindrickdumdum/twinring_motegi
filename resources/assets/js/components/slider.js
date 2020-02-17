import Swiper from 'swiper';

export default function slider(params) {
  if (!params.id) return;
  if (!params.target) return;

  const defaultOptions = {
    speed: 1500,
    initialSlide: 2,
    centeredSlides: false,

    breakpoints: {
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        loopedSlides: 0,
        initialSlide: 1,
        slidesPerGroup: 3,
        
      },
      375: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.5,
        initialSlide: 1,
        loopedSlides: 0,
        loop: true
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
