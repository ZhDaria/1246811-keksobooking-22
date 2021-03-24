import { adverts } from './data.js';
import { renderSimilarAdvert } from './similar-advert.js';

/* global L:readonly */

const AD_FORM = document.querySelector('.ad-form');
const MAP_FILTERS = document.querySelector('.map__filters');
const address = document.querySelector('#address');

AD_FORM.classList.add('ad-form--disabled');
AD_FORM.querySelectorAll('fieldset').forEach((element) => {
  element.disabled = true;
});

MAP_FILTERS.classList.add('map__filters--disabled');
MAP_FILTERS.querySelectorAll('fieldset, select').forEach((element) => {
  element.disabled = true;
});


address.value = '35.6895, 139.69171';

const map = L.map('map-canvas')
  .on('load', () => {
    adverts.then((all) => {
      renderSimilarAdvert(all);
    })

    MAP_FILTERS.classList.remove('map__filters--disabled');
    MAP_FILTERS.querySelectorAll('fieldset, select').forEach((element) => {
      element.disabled = false;
    });

    AD_FORM.classList.remove('ad-form--disabled');
    AD_FORM.querySelectorAll('fieldset').forEach((element) => {
      element.disabled = false
    });
  })
  .setView({lat: 35.6895, lng: 139.69171}, 8.4);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const MAIN_ICON = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],

})

const mainMarker = L.marker (
  {lat: 35.6895, lng: 139.69171},
  {
    draggable: true,
    icon: MAIN_ICON,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const cors = evt.target.getLatLng();
  address.value = `${cors.lat.toFixed(5)}, ${cors.lng.toFixed(5)}`;
})

export { mainMarker, address, map }

