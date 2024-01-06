const mapElement = document.getElementById('map');

// объекты на карте
let companyObjectManager = null;
let partnersObjectManager = null;

/* в реальном проекте данные маркеров, 
логотипа приходят из базы */

// данные маркера с логотипом
const company = {
  id: 1,
  name: 'Ezhetta',
  coords: [55.8058, 37.5149],
  logo: '<svg width="48" height="48" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M287.547 174.382C287.547 170 291.155 166.329 295.606 166.183C300.058 166.037 303.666 169.472 303.666 173.854L287.547 174.382ZM135.398 275.642C131.07 274.762 128.402 270.566 129.44 266.27C130.478 261.975 134.829 259.206 139.157 260.086L135.398 275.642ZM303.666 173.854C303.666 198.03 291.503 220.155 318.572 243.581L307.708 255.662C273.671 226.204 287.547 190.985 287.547 174.382L303.666 173.854ZM318.572 243.581C321.004 245.685 323.425 248.488 324.326 252.118C325.365 256.305 324.059 260.204 321.6 263.145C319.429 265.741 316.476 267.502 313.76 268.757C310.926 270.066 307.633 271.146 304.11 272.061C290.214 275.674 269.01 277.654 246.743 278.622C224.28 279.598 200.061 279.567 179.775 278.953C159.761 278.347 142.84 277.155 135.398 275.642L139.157 260.086C145.034 261.281 160.574 262.468 180.805 263.081C200.765 263.686 224.576 263.714 246.568 262.758C268.756 261.793 288.433 259.849 300.485 256.716C303.449 255.945 305.709 255.163 307.319 254.419C309.045 253.622 309.424 253.142 309.297 253.293C308.882 253.79 308.331 255.043 308.66 256.369C308.851 257.137 309.096 256.863 307.708 255.662L318.572 243.581Z" fill="#000000" fill-opacity="0.9"></path> <path d="M268.756 156.202C269.305 148.394 268.392 141.338 265.133 134.347" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M235.417 132.552C233.451 126.989 229.39 122.46 225.453 117.982" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M192.738 114.024C190.228 108.177 186.575 103.737 183.355 99" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M138.482 115.617C134.548 112.465 127.455 110.498 123.99 109.546" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M101.613 139.27C97.9344 136.023 89.7266 134.565 88.0266 134.413" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M79.0596 178.815C74.2086 179.014 69.3034 178.795 64.5681 178.41" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M78.6885 220.262C75.4166 222.113 68.9059 223.624 66.9137 224.309" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.791 255.673C97.2038 258.721 93.6031 261.356 91.5449 263.363" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M274.495 237.854C274.844 236.649 275.1 235.425 275.401 234.211" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M245.175 294.306C239.974 292.627 233.262 294.306 225.237 279.282" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M137.278 291.087C132.582 290.895 124.382 291.087 119.686 288.143" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
};

// офисы партнеров
const partners = [
  {
    id: 0,
    coords: [55.8035, 37.5349],
    icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_316_2)"><path d="M15.5364 12.225C15.7952 12.2032 16.1274 12.225 16.4222 12.2475C16.6524 12.264 16.8752 12.2797 17.0837 12.2797C17.4902 12.2797 18.0827 12.228 18.5312 11.7795L23.7812 6.52946C24.0744 6.23621 24.0744 5.76221 23.7812 5.46896L18.5312 0.218961C18.2379 -0.0742891 17.7639 -0.0742891 17.4707 0.218961L12.2207 5.46896C11.3312 6.35846 11.2502 7.27346 11.3214 8.00921L4.28044 0.969711C4.18819 0.877461 3.69094 0.416961 2.97244 0.416961C2.65294 0.416961 2.17669 0.512961 1.71994 0.969711C1.48144 1.20821 1.37119 1.55921 1.38319 2.04221C1.43119 3.95171 3.60019 9.46271 7.43344 13.2562L0.219937 20.4697C-0.0733125 20.763 -0.0733125 21.237 0.219937 21.5302L2.46994 23.7802C2.76319 24.0735 3.23719 24.0735 3.53044 23.7802L12.0002 15.3105L20.4699 23.7802C20.6162 23.9265 20.8082 24 21.0002 24C21.1922 24 21.3842 23.9265 21.5304 23.7802L23.7804 21.5302C24.0737 21.237 24.0737 20.763 23.7804 20.4697L15.5364 12.225ZM12.8867 8.35871C12.7562 7.59971 12.7059 7.10546 13.2804 6.53021L18.0002 1.81046L19.0794 2.88971L15.4847 6.48446C15.3384 6.63071 15.3384 6.86846 15.4847 7.01471C15.5582 7.08821 15.6542 7.12496 15.7502 7.12496C15.8462 7.12496 15.9422 7.08821 16.0157 7.01546L19.6104 3.42071L20.5802 4.39046L16.9854 7.98521C16.8392 8.13146 16.8392 8.36921 16.9854 8.51546C17.0582 8.58821 17.1542 8.62496 17.2502 8.62496C17.3462 8.62496 17.4422 8.58821 17.5157 8.51546L21.1104 4.92071L22.1897 5.99996L17.4699 10.7197C17.4632 10.7257 17.4002 10.7805 17.0829 10.7805C16.9097 10.7805 16.7237 10.7655 16.5324 10.752C16.2902 10.734 16.0389 10.716 15.7892 10.716C15.2244 10.716 14.3964 10.794 13.7199 11.4697L12.5304 10.2802C13.1154 9.69521 12.9879 8.95346 12.8867 8.35871ZM3.00019 22.1895L1.81069 21L9.03919 13.7715C9.05194 13.7587 9.05644 13.7407 9.06844 13.7272C9.22594 13.8555 9.38494 13.98 9.54694 14.1007C9.67819 14.199 9.83944 14.25 10.0037 14.25H10.9397L3.00019 22.1895ZM21.0002 22.1895L12.3107 13.5H9.99469C5.52919 10.173 2.79619 3.31646 2.88019 1.94846C2.91094 1.92896 2.94319 1.91621 2.97244 1.91621C3.05719 1.91621 3.17569 1.98971 3.21994 2.03021L22.1897 21L21.0002 22.1895Z" fill="#1C1263"/></g><defs><clipPath id="clip0_316_2"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
    name: 'Ежекафе',
    movement_icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 1,
    coords: [55.8078, 37.5123],
    icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_317_41)"><path d="M23.9946 13.9873C23.8642 12.7085 21.445 11.8245 17.9287 11.5571C17.5925 9.58618 17.2036 7.31199 17.0901 6.69385C16.8293 5.27808 14.9646 4.48632 13.5795 5.5073C12.853 6.04271 12.2033 6.08077 11.8591 6.08077C11.5148 6.08077 11.1325 6.15694 10.1386 5.5073C8.69868 4.5654 6.88888 5.27804 6.62886 6.69385C6.48969 7.44896 5.94036 10.6709 5.57928 12.7971C2.11935 13.7727 -0.126997 15.146 0.00556566 16.4402C0.204784 18.3914 5.73679 19.4248 12.3608 18.7473C18.9863 18.0698 24.1945 15.9392 23.9946 13.9873ZM6.20113 14.4539L6.58344 12.4661C6.58344 12.4661 13.3891 13.5361 17.2123 11.5484L17.5947 13.2308C17.5947 13.2308 13.4653 15.8301 6.20113 14.4539Z" fill="#1C1263"/></g><defs><clipPath id="clip0_317_41"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
    name: 'Ежешляпная',
    movement_icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 2,
    coords: [55.8038, 37.5189],
    icon_content: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5 16C13.4624 16 11 13.5376 11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 12.0347 21.3714 13.4227 20.3576 14.4203" stroke="#1C1263" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16.5 20V16M16.5 20H19.5M16.5 20H13.5" stroke="#1C1263" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 11V10.25C1.58579 10.25 1.25 10.5858 1.25 11H2ZM8 11H8.75C8.75 10.5858 8.41421 10.25 8 10.25V11ZM8.75 17C8.75 16.5858 8.41421 16.25 8 16.25C7.58579 16.25 7.25 16.5858 7.25 17H8.75ZM7.25 13C7.25 13.4142 7.58579 13.75 8 13.75C8.41421 13.75 8.75 13.4142 8.75 13H7.25ZM2 11.75H8V10.25H2V11.75ZM2.75 17V11H1.25V17H2.75ZM5 19.25C3.75736 19.25 2.75 18.2426 2.75 17H1.25C1.25 19.0711 2.92893 20.75 5 20.75V19.25ZM7.25 17C7.25 18.2426 6.24264 19.25 5 19.25V20.75C7.07107 20.75 8.75 19.0711 8.75 17H7.25ZM7.25 11V13H8.75V11H7.25Z" fill="#1C1263"></path> <path d="M3 11H7V5.61799C7 4.87461 6.21769 4.39111 5.55279 4.72356L3.55279 5.72356C3.214 5.89295 3 6.23922 3 6.61799V11Z" stroke="#1C1263" stroke-width="1.5"></path> </g></svg>',
    name: 'Ежеиголочная',
    movement_icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
  {
    id: 3,
    coords: [55.8088, 37.5139],
    icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_318_51)"><path d="M15.75 9.15C13.2 9.15 10.725 8.85 8.55 8.25C8.4 9.225 8.25 10.275 8.25 11.325C8.25 17.925 11.625 23.25 15.75 23.25C19.875 23.25 23.25 17.925 23.25 11.325C23.25 10.275 23.175 9.225 22.95 8.25C20.775 8.85 18.3 9.15 15.75 9.15Z" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 18.075C14.625 18.075 13.575 17.775 12.75 17.25C12.9 18.9 14.175 20.25 15.75 20.25C17.325 20.25 18.6 18.9 18.75 17.25C17.925 17.775 16.875 18.075 15.75 18.075Z" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.25 15C11.25 14.175 11.925 13.5 12.75 13.5C13.575 13.5 14.25 14.175 14.25 15" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 15C17.25 14.175 17.925 13.5 18.75 13.5C19.575 13.5 20.25 14.175 20.25 15" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9.15C15.525 7.575 15.75 5.775 15.75 3.9C15.75 2.85 15.675 1.8 15.45 0.825C13.2 1.425 10.8 1.725 8.25 1.725C5.7 1.725 3.225 1.35 1.05 0.75C0.825 1.725 0.75 2.775 0.75 3.825C0.75 10.425 4.125 15.75 8.25 15.75C8.4 15.75 8.625 15.75 8.775 15.75" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25 11.175C7.125 11.175 6.075 11.475 5.25 12C5.4 10.35 6.675 9 8.25 9" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 5.25C3.75 6.075 4.425 6.75 5.25 6.75C6.075 6.75 6.75 6.075 6.75 5.25" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 5.25C9.75 6.075 10.425 6.75 11.25 6.75C12.075 6.75 12.75 6.075 12.75 5.25" stroke="#1C1263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_318_51"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
    name: 'Ежетеатр',
    movement_icon_content: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10L6.72147 5.6712C6.8822 4.70683 7.71658 4 8.69425 4H15.3057C16.2834 4 17.1178 4.70683 17.2785 5.6712L18 10M6 10H18M6 10C4.89543 10 4 10.8954 4 12V14C4 15.1046 4.89543 16 6 16M18 10C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16M18 16H6M18 16L17.9999 17.5001C17.9999 18.3284 17.3283 19 16.4999 19C15.6715 19 15 18.3284 15 17.5001V16H18ZM6 16V17.5001C6 18.3284 6.67155 19 7.49995 19C8.32835 19 8.9999 18.3284 8.9999 17.5001V16H6Z" stroke="#c50bea"></path></g></svg>',
    movement_time: '5 мин на машине',
  },
];

// загружает API Яндекс карт
function loadYandexMapAPI(callback) {
  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.1/?apikey=8c50b945-d9f7-4bf3-96f7-49dc0772c9bf&lang=ru_RU';
  script.onload = callback;
  document.head.appendChild(script);
}

function getObjByKeys (obj, keys) { 
  keys.reduce((acc, key) => {
    if (acc && acc.hasOwnProperty(key)) {
      return acc[key];
    } else {
      return false;
    }
  }, obj);
}

// создает кастомный html-шаблон маркера
function companyMarkerTemplate (ymaps, company) {
  if (!ymaps) {
    return null;
  }

  const template = ymaps.templateLayoutFactory.createClass(`
    <div class="company-marker js-company-marker">
      <div class="company-marker__logo">
        ${company.logo ? company.logo : ''}
      </div>
    </div>`, {
    build: function() {
      template.superclass.build.call(this);
    },
  });
  
  return template;
}

function generateCompanyMarker (ymaps, company, active = false, disableEvents = false ) {
  // размер маркера
  const sizes = [68, 68];

  return {
    // географический объект для отображения на карте
    type: 'Feature',
    id: company.id,
    // объект типа "точка" с координатами
    geometry: {
      type: 'Point',
      coordinates: company.coords,
    },
    properties: {
      id: company.id,
      name: company.name,
    },
    options: {
      // внешний вид маркера
      iconLayout: companyMarkerTemplate(ymaps, company),
      // смещение маркера
      iconOffset: [-sizes[0] / 2, -sizes[1] / 2],
      coordinates: [
        [0, 0], sizes
      ],
      // слой отображения маркера
      pane: 'overlaps',
      // активность маркера
      active: active,
      // отключение событий
      disableEvents: disableEvents,
    }
  }
}

function addOffice() {
 if (!company.coords || !map) {
  return;
 }

 // создает объект
 companyObjectManager = new ymaps.ObjectManager({});

 // создает маркер
 const companyMarker = generateCompanyMarker(ymaps, company, true, true);

 // добавляет маркер в объект
 companyObjectManager.add(companyMarker);

 // добавляет объект на карту
 map.geoObjects.add(companyObjectManager);
}

function addPartners() {

}

function activateMarkers () {

}

// создает карту
function initializeMap() {
  loadYandexMapAPI(() => {
    ymaps.ready(() => {
      map = new ymaps.Map(mapElement, {
        // центр карты
        centber: [55.751574, 37.573856],
        // масштаб
        zoom: 10
      });

      if (map) {
        // добавляет на карту элементы управления масштабом
        map.controls.add('zoomControl', {
          position: {top: 10, right: 10}
        });

        // отключает прокрутку карты
        map.behaviors.disable('scrollZoom');
    
        // добавляет маркер офиса
        addOffice();
    
        // добавляет маркеры партнерских компаний 
        addPartners();
    
        // активирует функционал буллитов
        activateMarkers();
      }
    });
  });
}

let map = null;

initializeMap();
