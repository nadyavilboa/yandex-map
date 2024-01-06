const mapElement = document.getElementById('map');

/* в реальном проекте данные маркеров, 
логотипа приходят из базы */

// данные маркера с логотипом
const project = {
  id: 1,
  name: 'office',
  coords: [23, 50],
  logo: '<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M287.547 174.382C287.547 170 291.155 166.329 295.606 166.183C300.058 166.037 303.666 169.472 303.666 173.854L287.547 174.382ZM135.398 275.642C131.07 274.762 128.402 270.566 129.44 266.27C130.478 261.975 134.829 259.206 139.157 260.086L135.398 275.642ZM303.666 173.854C303.666 198.03 291.503 220.155 318.572 243.581L307.708 255.662C273.671 226.204 287.547 190.985 287.547 174.382L303.666 173.854ZM318.572 243.581C321.004 245.685 323.425 248.488 324.326 252.118C325.365 256.305 324.059 260.204 321.6 263.145C319.429 265.741 316.476 267.502 313.76 268.757C310.926 270.066 307.633 271.146 304.11 272.061C290.214 275.674 269.01 277.654 246.743 278.622C224.28 279.598 200.061 279.567 179.775 278.953C159.761 278.347 142.84 277.155 135.398 275.642L139.157 260.086C145.034 261.281 160.574 262.468 180.805 263.081C200.765 263.686 224.576 263.714 246.568 262.758C268.756 261.793 288.433 259.849 300.485 256.716C303.449 255.945 305.709 255.163 307.319 254.419C309.045 253.622 309.424 253.142 309.297 253.293C308.882 253.79 308.331 255.043 308.66 256.369C308.851 257.137 309.096 256.863 307.708 255.662L318.572 243.581Z" fill="#000000" fill-opacity="0.9"></path> <path d="M268.756 156.202C269.305 148.394 268.392 141.338 265.133 134.347" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M235.417 132.552C233.451 126.989 229.39 122.46 225.453 117.982" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M192.738 114.024C190.228 108.177 186.575 103.737 183.355 99" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M138.482 115.617C134.548 112.465 127.455 110.498 123.99 109.546" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M101.613 139.27C97.9344 136.023 89.7266 134.565 88.0266 134.413" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M79.0596 178.815C74.2086 179.014 69.3034 178.795 64.5681 178.41" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M78.6885 220.262C75.4166 222.113 68.9059 223.624 66.9137 224.309" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.791 255.673C97.2038 258.721 93.6031 261.356 91.5449 263.363" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M274.495 237.854C274.844 236.649 275.1 235.425 275.401 234.211" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M245.175 294.306C239.974 292.627 233.262 294.306 225.237 279.282" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M137.278 291.087C132.582 290.895 124.382 291.087 119.686 288.143" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
};

// офисы партнеров
const partners = [
  {
    id: 0,
    coords: [20, 40],
    icon_content: 'icon',
    name: 'Ежекафе',
    movement_icon_content: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 1,
    coords: [25, 70],
    icon_content: 'icon',
    name: 'Ежешляпная',
    movement_icon_content: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 2,
    coords: [20, 70],
    icon_content: 'icon',
    name: 'Ежеиголочная',
    movement_icon_content: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 3,
    coords: [25, 40],
    icon_content: 'icon',
    name: 'Ежетеатр',
    movement_icon_content: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
];

function addOffice() {
  
}

function addPartners() {
  
}

function activateMarkers() {
  
}

async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, ZoomControl} = ymaps3;

  const map = new YMap(
    mapElement,
    {
      location: {
        // центр карты
        center: [18.75, 50],
        // масштаб
        zoom: 10
      }
    }
  );
  map.addChild(new YMapDefaultSchemeLayer());
  
  // Добавляет элементы управления zoom
  map.controls.add(new ymaps.control.ZoomControl(), {top: 10, right: 10});
  
  // отключает прокрутку карты
  map.behaviors.disable('scrollZoom');
  
  // добавляет маркер офиса
  addOffice();
  
  // добавляет маркеры партнерских компаний 
  addPartners();
  
  // активирует функционал буллитов
  activateMarkers();
}

initMap();
