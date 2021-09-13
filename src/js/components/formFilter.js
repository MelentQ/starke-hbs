export default function formFilter() {
  const container = document.querySelector('.form-filter');
  if (!container) return;

  const filterLinks = container.querySelectorAll('.form-filter__link');

  // При первой загрузке первая ссылка активная
  filterLinks[0].classList.add('form-filter__link--active');

  function setAsActive(index) {
    filterLinks.forEach((link, i) => {
      (i === index) ? link.classList.add('form-filter__link--active') : link.classList.remove('form-filter__link--active');
    })
  }

  filterLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
      setAsActive(i);
    })
  })
}