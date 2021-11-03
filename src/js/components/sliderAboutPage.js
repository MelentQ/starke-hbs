import {Swiper, Navigation, EffectFade, Autoplay} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay]);

export default function sliderAboutPage() {
  const container = document.querySelector('#js-init-about-slider');
  if (!container) return;

  const slider = new Swiper(container, {
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 6000
    },
    navigation: {
      nextEl: '.about-slider__btn_type_next',
      prevEl: '.about-slider__btn_type_prev',
    }
  });

  const pagination = container.querySelector('.about-slider__pagination');
  const currentSlideLabelElement = pagination.querySelector('.about-slider__current-slide');
  const slidesCountLabelElement = pagination.querySelector('.about-slider__slides-count');

  currentSlideLabelElement.textContent = slider.activeIndex + 1;
  slidesCountLabelElement.textContent = '/' + slider.slides.length;
  
  slider.on('slideChange', (slider) => {
    currentSlideLabelElement.textContent = slider.activeIndex + 1;
  })

  // Подключаем дополнительную навигацию
  const onImageNavigationContainers = container.querySelectorAll('.about-slide__navigation-on-image');

  onImageNavigationContainers.forEach(container => {
    const prevBtn = container.querySelector('.about-intro__nav--prev-slide');
    prevBtn.addEventListener('click', () => {
      slider.slidePrev();
    })
    const nextBtn = container.querySelector('.about-intro__nav--next-slide');
    nextBtn.addEventListener('click', () => {
      slider.slideNext();
    })
  })
}