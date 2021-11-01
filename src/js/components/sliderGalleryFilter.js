import {Swiper} from 'swiper';

export default function sliderGalleryFilter() {
  const container = document.querySelector('#js-init-gallery-filter-slider');

  if (!container) return;

  const sliderContainer = container.querySelector('.swiper');

  new Swiper(sliderContainer, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
  })
}