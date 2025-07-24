import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const heroSlide = new Swiper('.hero__slider', {
  slidesPerView: 'auto',
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.hero__slider-btn--next',
    prevEl: '.hero__slider-btn--prev',
  },
  breakpoints: {
    1561: {
      slidesPerView: 'auto',
      direction: 'vertical',
      pagination: {
    el: '.swiper-pagination',
  },
    }
  }
});
