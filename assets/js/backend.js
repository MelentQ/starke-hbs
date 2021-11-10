document.addEventListener('DOMContentLoaded', () => {
  handleSubmit({
    containerSelector: ".form-question",
    formSelector: ".form",
    submitBlockSelector: ".form__success-block",
    openFormBtnSelector: ".form__success-block-again-btn"
  }, {
    hiddenFormClass: "send",
    openedSuccessBlockClass: "visible"
  })
});

/**
 * Обработчик формы
 * @param {String} containerSelector - CSS-селектор общего контейнера
 * @param {String} formSelector - CSS-селектор формы
 * @param {String} submitBlockSelector - CSS-селектор блока с оповещением об успешной отправке
 * @param {String} openFormBtnSelector - CSS-селектор блока с оповещением об успешной отправке
 * @param {String} hiddenFormClass - CSS-класс для скрытия формы
 * @param {String} openedSuccessBlockClass - CSS-класс для показа блока с оповещением об успешной отправке
 */
function handleSubmit({containerSelector, formSelector, submitBlockSelector, openFormBtnSelector}, {hiddenFormClass, openedSuccessBlockClass}) {
  const formContainer = document.querySelector(containerSelector);
  if (!formContainer) return;

  const form = formContainer.querySelector(formSelector);
  const successBlock = formContainer.querySelector(submitBlockSelector);
  const openFormBtn = successBlock.querySelector(openFormBtnSelector);

  // Так же нужно дизейблить кнопку отправки формы при ожидании ответа от сервера
  // Класс для дизейбла - disabled

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.classList.add(hiddenFormClass);
    successBlock.classList.add(openedSuccessBlockClass);
  })

  openFormBtn.addEventListener('click', () => {
    form.classList.remove(hiddenFormClass);
    successBlock.classList.remove(openedSuccessBlockClass);
  })
}