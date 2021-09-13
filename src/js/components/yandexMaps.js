export default function initMap() {
  const container = document.querySelector('.contacts');
  if (!container || !ymaps) return;

  ymaps.ready(init);
}

function init(){
  const map = new ymaps.Map("distributorsMap", {
    center: [55.76, 37.64],
    zoom: 7,
    controls: ['zoomControl']
  });

  map.behaviors.disable('scrollZoom');

  /**
   * Добавляет объект на Яндекс Карту
   * @param {Array} coords - Координаты в виде массива [55.76, 37.56]
   * @param {Object} properties - Параметры: имя, описание и т.д.
   */
  function addPlace(coords, {name, address, tel, telFormatted, workingTime}) {
    const balloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(`
      <div class="map-balloon">
        <img class="map-balloon__logo" src="img/logo-dark.png" alt="Лого">
        <h3 class="map-balloon__name">{{properties.name}}</h3>
        <span class="map-balloon__address">{{properties.address}}</span>
        <a class="map-balloon__tel" href="tel:{{properties.tel}}" title="Позвонить">
          <svg class="map-balloon__tel-icon">
            <use xlink:href="#phone-filled">
          </svg>
          <span class="map-balloon__tel-label">{{properties.telFormatted}}</span>
        </a>
        <span class="map-balloon__working-time">{{properties.workingTime}}</span>
      </div>
    `);

    const placemarkProperties = {
      name,
      address,
      tel,
      telFormatted,
      workingTime
    }

    const placemarkOptions = {
      balloonContentLayout: balloonContentLayoutClass,
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [40, 40],
      iconImageOffset: [0, 0]
    }

    const placemark = new ymaps.Placemark(coords, placemarkProperties, placemarkOptions);

    map.geoObjects.add(placemark);
  }

  // Теперь этой функцией можно воспользоваться из любого файла
  window.addPlace = addPlace;
}