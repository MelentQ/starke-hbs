import {Swiper, Pagination, Navigation, EffectFade, Autoplay} from "swiper";

Swiper.use([Pagination, Navigation, EffectFade, Autoplay]);

export default function sliderMainPage() {
  const container = document.querySelector('.intro__slider');
  if (!container) return;

  new Swiper(container, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 6000,
      pauseOnMouseEnter: true
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