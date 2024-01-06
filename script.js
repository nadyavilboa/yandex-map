let ymaps = null;

async function loadYandexMapAPI () {
  return new Promise((resolve, reject) => {
    ymaps.ready(() => {
      resolve(ymaps);
    });
  });
}

async function initializeMap() {
  ymaps = await loadYandexMapAPI();

  if (ymaps) {
    var map = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 9
    });

    map.controls.add('zoomControl', {
      position: {top: 10, right: 10}
    });
  }
}

initializeMap();
