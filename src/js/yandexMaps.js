export default function initMap() {
  const host = document.querySelector('.contacts');
  if (!host || !ymaps) return;

  ymaps.ready(init);
}

function init(){
  const map = new ymaps.Map("map", {
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
  function addPlace(coords, {name, description}) {
    const balloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(`
      <div class="my-layout">
        <h3>{{properties.name}}</h3>
        <p>{{properties.description}}</p>
      </div>
    `);

    const placemarkProperties = {
      name: name,
      description: description
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