// Пример массива для Яндекс карты
const places = [
  {
    coords: [55.76, 37.56],
    properties: {
      name: 'Москва',
      description: 'Столица. Много людей.'
    }
  },
  {
    coords: [55.26, 37.46],
    properties: {
      name: 'Рядом с Москвой',
      description: 'Пример'
    }
  }
]

/**
 * Добавляет места на Яндекс карту
 * @param {Array} places - массив с данными мест
 */
function addPlaces(places) {
  ymaps.ready(() => {
    places.forEach(place => {
      window.addPlace(place.coords, place.properties);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addPlaces(places)
});