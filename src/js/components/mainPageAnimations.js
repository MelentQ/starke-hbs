import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function mainPageAnimations() {
  const container = document.querySelector('#js-benefits-animation');

  if (!container) return;

  const images = container.querySelectorAll('.benefit__image');

  let animation = gsap.timeline({
    scrollTrigger: {
      trigger: images[0],
      start: "center center"
    }
  })

  animation.fromTo(images[0], {
    x: -20,
  },{
    x: 0,
  });
}