import { auto } from '@popperjs/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const homeSlide = new Swiper('.home-slider__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.home-slider__slider-btn--next',
    prevEl: '.home-slider__slider-btn--prev',
  },
  breakpoints: {
    // При ширине >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: auto,
      spaceBetween: 30,
    },
  },
});
