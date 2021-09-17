/**
 * Функция создает padding-top, равный высоте шапки, основному контейнеру с контентом
 */
function setPageMainPaddingTop() {
  const header = document.querySelector('.page-header');
  const pageMain = document.querySelector('.page-main');

  function setPadding() {
    const headerHeight = header.clientHeight;
    pageMain.style.paddingTop = headerHeight + 'px';
  };

  setPadding();

  window.addEventListener('resize', setPadding);
}

export {
  setPageMainPaddingTop
}