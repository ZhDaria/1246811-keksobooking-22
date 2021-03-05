import { adverts } from './data.js';
import { createAdvertPopup } from './similar-list.js';

/* global L:readonly */

const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');

adForm.querySelectorAll('fieldset').forEach((element) => {
  element.disabled = true;
});

const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');

mapFilters.querySelectorAll('fieldset, select').forEach((element) => {
  element.disabled = true;
});

const address = document.querySelector('#address');
address.value = '35.6895, 139.69171';

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    adForm.querySelectorAll('fieldset').forEach((element) => {
      element.disabled = false
    });
    mapFilters.classList.remove('map__filters--disabled');
    mapFilters.querySelectorAll('fieldset, select').forEach((element) => {
      element.disabled = false;
    });
  })
  .setView({lat: 35.6895, lng: 139.69171}, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],

})

const mainMarker = L.marker (
  {lat: 35.6895, lng: 139.69171},
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const cors = evt.target.getLatLng();
  address.value = `${cors.lat.toFixed(5)}, ${cors.lng.toFixed(5)}`;
})

adverts.forEach((advert) => {
  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: advert.location.x,
    lng: advert.location.y,
  }, {icon});

  marker.addTo(map).bindPopup(createAdvertPopup(advert),{
    keepInView: true,
  },
  );
});



