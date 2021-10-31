import setFullScreenHeight from "./setFullScreenHeight";

export default function mainPage() {
  const container = document.querySelector('.intro');
  if (!container) return;

  if (document.documentElement.clientWidth <= 768) {
    setFullScreenHeight('.intro-slide__content-block');
    setFullScreenHeight('.intro-slide__big-image-block');
  }
  else {
    setFullScreenHeight('.intro-slide');
  }
}