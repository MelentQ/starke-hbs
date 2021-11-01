import Swiper, {Pagination, Navigation, Autoplay, Controller, EffectCreative} from "swiper";

Swiper.use([Pagination, Navigation, Autoplay, Controller, EffectCreative]);

export default function sliderMainPage() {
  const container = document.querySelector('.intro__inner');
  if (!container) return;

  const contentSliderContainer = container.querySelector('#js-content-slider');

  const contentSlider = new Swiper(contentSliderContainer, {
    slidesPerView: 1,
    resistanceRatio: 0,
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

  const bigImageSliderContainer = container.querySelector('#js-big-image-slider');

  const bigImageSlider = new Swiper(bigImageSliderContainer, {
    slidesPerView: 1,
    resistanceRatio: 0,
    delayBetweenSlides: 700,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["0%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    }
  })

  bigImageSlider.controller.control = contentSlider;
  contentSlider.controller.control = bigImageSlider;
}