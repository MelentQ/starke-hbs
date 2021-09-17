import {Swiper, Pagination, Navigation, EffectFade} from "swiper";

Swiper.use([Pagination, Navigation, EffectFade]);

export default function sliderMainPage() {
  const container = document.querySelector('.intro__slider');
  if (!container) return;

  new Swiper(container, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.intro__slider-btn_type_next',
      prevEl: '.intro__slider-btn_type_prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });
}