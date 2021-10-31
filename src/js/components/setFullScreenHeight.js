/**
 * Функция задаёт 100vh элементу, вычисляя высоту экрана в px.
 * @param {String} elementSelector CSS селектор элемента
 * @param {Number} percent 100 = 100vh, 50 = 50vh
 */
export default function setFullScreenHeight(elementSelector, percent = 100) {
  const elements = document.querySelectorAll(elementSelector);
  if (!elements) return;

  const screenFullHeight = document.documentElement.clientHeight;

  elements.forEach(element => {
    element.style.height = percent / 100 * screenFullHeight + 'px';
  })
}