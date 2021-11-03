import {Swiper, EffectFade} from "swiper";

Swiper.use([EffectFade]);

export default function product() {
  const container = document.querySelector('#js-colors-list');
  if (!container) return;

  const isMobileResolution = document.documentElement.clientWidth < 640;

  const productSlider = new Swiper('#js-product-slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const colorLinks = container.querySelectorAll('.color-item__link');

  colorLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Ставим выделение на эту кнопку, на остальных снимаем
      colorLinks.forEach((link, k) => {
        if (i === k) link.parentElement.classList.add('selected')
        else link.parentElement.classList.remove('selected')
      })

      productSlider.slideTo(i);
    })
  })

  if (isMobileResolution) {
    new Swiper('#js-colors-list-slider', {
      slidesPerView: 2,
      spaceBetween: 16,
      breakpoints: {
        375: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 56
        }
      }
    });
  } else {

  }

  productSlider.on('slideChange', (swiper) => {
    colorLinks.forEach((link, i) => {
      if (i === swiper.activeIndex) link.parentElement.classList.add('selected')
      else link.parentElement.classList.remove('selected')
    })
  })
  
  new Swiper('#js-files-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 56,
        resistanceRatio: 0
      }
    }
  });
}