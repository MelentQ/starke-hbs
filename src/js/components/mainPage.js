import setFullScreenHeight from "./setFullScreenHeight";

export default function mainPage() {
  const container = document.querySelector('.intro');
  if (!container) return;

  setFullScreenHeight('.intro__content-slider');
  setFullScreenHeight('.intro__big-image-slider');
}