ymaps.ready(initMap);

function initMap() {
  var map = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9
  });

  map.controls.add('zoomControl', {
    position: {top: 10, right: 10}
  });
}
