async function loadYandexMapAPI () {
  return new Promise((resolve, reject) => {
    ymaps.ready(() => {
      resolve(ymaps);
    });
  });
}

function initMap() {
  var map = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9
  });

  map.controls.add('zoomControl', {
    position: {top: 10, right: 10}
  });
}

const ymaps = await loadYandexMapAPI();

if (yamps) {
  initMap();
}
