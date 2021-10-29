import accordions from '../accordions';

const contactsPage = document.querySelector('.contacts');

/**
 * Генерирует контент на странице "Контакты"
 */
function contacts() {
  if (!contactsPage) return;

  setDistributorsHeight();

  fetch('/data/contacts.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      ymaps.ready(() => {
        renderFilter(data);
        renderDistributors(data);
        renderPlacemarks(data);
        initFilter();
    
        accordions(contactsPage);
      })
    })
}

/**
 * Рендерит фильтр сверху
 */
function renderFilter(data) {
  const container = contactsPage.querySelector('.form-filter');

  // Массив, в котором будут храниться кнопки.
  // Нужен для добавления событий.
  const links = new Array(data.length + 1);

  // Создаем кнопку "Все города"
  const allOption = _getTemplate(container, '.js-map-filter-element-template');
  const allOptionLink = allOption.querySelector('.form-filter__link');
  links.push(allOptionLink);
  allOptionLink.classList.add('form-filter__link--active');
  allOptionLink.textContent = "Все города";

  // Клик по фильтру "Все города" покажет точку на карте по умолчанию
  // Эта точка меняется в HTML через data-атрибуты
  const mapDefaultCenter = window.contactsMap.getCenter();
  const mapDefaultZoom = window.contactsMap.getZoom();
  allOptionLink.addEventListener('click', () => {
    window.contactsMap.setCenter(mapDefaultCenter, mapDefaultZoom);
  })

  container.append(allOption);

  // Генерируем остальные кнопки с городами.
  // Данные из json
  data.forEach(item => {
    const element = _getTemplate(container, '.js-map-filter-element-template');
    const link = element.querySelector('.form-filter__link');
    links.push(link);
    link.textContent = item.city;

    // По клику на фильтр "Город" карта будет центрироваться на этом городе
    link.addEventListener('click', () => {
      window.contactsMap.setCenter(item.cityCoords, 11);
    })

    container.append(element);
  });

  _setAsActive();

  /**
   * По клику кнопка становится активной.
   * У всех остальных кнопок удаляется активный класс.
   */
  function _setAsActive() {
    links.forEach((link, i) => {
      link.addEventListener('click', () => {
        link.classList.add('form-filter__link--active');

        links.forEach((l, k) => {
          if (k === i) return;
          l.classList.remove('form-filter__link--active');
        })
      })
    })
  }
}

/**
 * Рендерит список дистрибьютеров слева от карты
 */
function renderDistributors(data) {
  const container = contactsPage.querySelector('.contacts__accordion');
  // Проходит по массиву городов, получает шаблон города, заполняет текстовое содержимое и рендерит на страницу
  data.forEach(item => {
    const cityTemplate = _getTemplate(container, '.js-distributors-template');
    const accordionHeader = cityTemplate.querySelector('.distributors__header');
    const cityNameElement = accordionHeader.querySelector('.distributors__city');
    cityNameElement.textContent = item.city;
    const distributorsCountElement = accordionHeader.querySelector('.distributors__count');
    distributorsCountElement.textContent = item.distributors.length + " " + _getDistributorsLabel(item.distributors.length);

    const listContainer = cityTemplate.querySelector('.distributors__list');
    item.distributors.forEach(distributor => {
      const distributorTemplate = _getTemplate(listContainer, '.js-distributors-item-template');
      const distributorName = distributorTemplate.querySelector('.distributors__item-name');
      distributorName.textContent = distributor.name;
      const distributorAddress = distributorTemplate.querySelector('.distributors__item-address');
      distributorAddress.textContent = distributor.address;
      const distributorTel = distributorTemplate.querySelector('.distributors__item-tel');
      distributorTel.href = "tel:" + distributor.tel;
      const distributorFormattedTel = distributorTemplate.querySelector('.distributors__item-tel-label');
      distributorFormattedTel.textContent = distributor.telFormatted;
      const distributorWorkingTime = distributorTemplate.querySelector('.distributors__item-working-time');
      distributorWorkingTime.textContent = distributorTemplate.workingTime;

      // По клику это место показывается на Яндекс.Карте
      distributorTemplate.addEventListener('click', () => {
        window.contactsMap.setCenter(distributor.coords, 18);
      })

      listContainer.append(distributorTemplate);
    })

    // По клику этот город показывается на Яндекс.Карте
    accordionHeader.addEventListener('click', () => {
      window.contactsMap.setCenter(item.cityCoords, 11);
    })

    container.append(cityTemplate);
  })
}

/**
 * Рендерит объекты на Яндекс Карте
 */
function renderPlacemarks(data) {
  data.forEach(city => {
    city.distributors.forEach(distributor => {
      const placeOptions = {
        name: distributor.name,
        address: distributor.address,
        tel: distributor.tel,
        telFormatted: distributor.telFormatted,
        workingTime: distributor.workingTime
      }
  
      window.addPlace(distributor.coords, placeOptions);
    })
  })
}

/**
 * Задает максимальную высоту списку с дистрибьютерами, равную высоте карты
 * Не нашел, как это сделать через CSS
 */
function setDistributorsHeight() {
  const distributorsList = contactsPage.querySelector('.contacts__accordion');
  const map = contactsPage.querySelector('.contacts__distributors-map');

  function setHeight() {
    const mapHeight = map.clientHeight;
    distributorsList.style.height = mapHeight + 'px';
  }

  setHeight();

  window.addEventListener('resize', setHeight);
}

/**
 * Инициализирует работу фильтра
 * Можно сделать так, чтобы работало быстрее, но это через ООП
 */
function initFilter() {
  const filterLinks = contactsPage.querySelectorAll('.form-filter__link');
  const distributorsList = contactsPage.querySelectorAll('.distributors');

  filterLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
      if (i === 0) {
        // Показать все города
        distributorsList.forEach(distributor => {
          distributor.classList.remove('hidden');
          distributor.classList.remove('filtered');
          distributor.classList.remove('active');
        })

        window.enableAccordions();
      }
      else {
        // Показать город с его дистрибьютерами
        const city = link.textContent;
  
        distributorsList.forEach(distributor => {
          const cityElement = distributor.querySelector('.distributors__city');
          if (cityElement.textContent != city) {
            distributor.classList.add('hidden');
            distributor.classList.remove('filtered');
          }
          else {
            distributor.classList.remove('hidden');
            distributor.classList.add('filtered');

            const accordionContent = distributor.querySelector('.distributors__list');
            window.disableAccordion(accordionContent)
          }
        })
      }
    })
  })
}

/**
 * Получает шаблон элемента
 * @param {Object} container DOM-элемент, контейнер, в котором находится шаблон
 * @param {String} selector CSS-селектор шаблона
 * @returns {Object} DOM-элемент
 */
function _getTemplate(container = document, selector) {
  return container.querySelector(selector)
    .content
    .children[0]
    .cloneNode(true);
}

/**
 * Склоняет слово "Дистрибьютор"
 * @param {Number} count 
 */
function _getDistributorsLabel(count) {
  if (count === 11) return "дистрибьюторов";
  count = count % 10;
  if (count === 0 || count === 5 || count === 6 || count === 7 || count === 8 || count === 9) return "дистрибьюторов";
  if (count === 1) return "дистрибьютор";
  if (count === 2 || count === 3 || count === 4) return "дистрибьютора";
}

export {contacts};