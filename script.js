let ymaps = null;

async function loadYandexMapAPI () {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=8c50b945-d9f7-4bf3-96f7-49dc0772c9bf&lang=ru_RU';
    script.onload = () => resolve();
    document.head.appendChild(script);
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

document.addEventListener("DOMContentLoaded", (event) => initializeMap());
