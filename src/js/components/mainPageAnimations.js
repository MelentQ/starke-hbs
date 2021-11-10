import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function mainPageAnimations() {
  const container = document.querySelector('#js-benefits-animation');

  if (!container) return;

  const animatedCards = container.querySelectorAll('.benefit__link-block');
  animatedCards.forEach((card, i) => {
    // Анимируемые объекты:
    const image = card.querySelector('.benefit__image');
    const description = card.querySelector('.benefit__description');
    const icon = card.querySelector('.benefit__icon');

    const animation = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: card,
        start: "center bottom",
        end: "+=400"
      }
    })

    switch(i) {
      case 0:
        animation
          .fromTo(image, {x: -20}, {x: 0, duration: 1})
          .fromTo(description, {y: 20}, {y: 0, duration: 1}, "<")
          .fromTo(icon, {y: -20}, {y: 0, duration: 1}, "<");
        break;
    
      case 1:
        animation
          .fromTo(image, {x: -20}, {x: 0, duration: 1})
          .fromTo(description, {y: -20}, {y: 0, duration: 1}, "<")
          .fromTo(icon, {x: 20}, {x: 0, duration: 1}, "<");
        break;

      case 2:
        animation
          .fromTo(image, {y: 20}, {y: 0, duration: 1})
          .fromTo(description, {x: 20}, {x: 0, duration: 1}, "<")
          .fromTo(icon, {y: 20}, {y: 0, duration: 1}, "<");
        break;
    
      default:
        // Как у 0 элемента
        animation
          .fromTo(image, {x: -20}, {x: 0, duration: 1})
          .fromTo(description, {y: 20}, {y: 0, duration: 1}, "<")
          .fromTo(icon, {y: -20}, {y: 0, duration: 1}, "<");
        break;
    }
  })

  // const allCards = container.querySelectorAll('.benefits__item');

  // allCards.forEach((card, i) => {
  //   // Задаем анимацию для четных и нечетных
  //   if (i % 2 === 0) {
  //     gsap.to(card, {
  //       duration: 1,
  //       y: 80,
  //       scrollTrigger: {
  //           trigger: card,
  //           scrub: 1,
  //           start: 'top bottom',
  //           end: 'bottom top'
  //       }
  //     });
  //   }
  //   else {
  //     gsap.to(card, {
  //       duration: 1,
  //       y: -80,
  //       scrollTrigger: {
  //           trigger: card,
  //           scrub: 1,
  //           start: 'top bottom',
  //           end: 'bottom top'
  //       }
  //     });
  //   }
  // })
}