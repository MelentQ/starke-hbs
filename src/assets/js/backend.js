// Пример массива для Яндекс карты
const places = [
  {
    coords: [55.76, 37.56],
    properties: {
      name: 'Строймаркет',
      address: 'ул. Липовская, 16, павильон Д2',
      tel: '+78005000600',
      telFormatted: '8 800 5000 600',
      workingTime: 'Пн-Пт, с 10:00 до 22:00'
    }
  },
  {
    coords: [55.26, 37.46],
    properties: {
      name: 'Кровля и фасады',
      address: 'ул. Липовская, 16, павильон Д2',
      tel: '+78005000600',
      telFormatted: '8 800 5000 600',
      workingTime: 'Пн-Пт, с 10:00 до 22:00'
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
  if (document.querySelector('.contacts')) addPlaces(places);
});