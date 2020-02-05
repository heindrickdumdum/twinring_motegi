import Swiper from 'swiper';

export default function slider() {
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
    spaceBetween: 50,
    speed: 1500,
    initialSlide: 1,
    slidesPerGroup: 3,
});
}