import {createAdvertPopup} from './popup.js';
import { map } from './map.js'

/* global L:readonly */
let markers = [];
const renderSimilarAdvert = (adverts) => {
  markers.forEach((marker) => {
    marker.remove();
  })

  adverts.forEach((advert) => {

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat: advert.location.lat,
      lng: advert.location.lng,
    }, {icon});

    marker.addTo(map).bindPopup(createAdvertPopup(advert),{keepInView: true});
    markers.push(marker);
  });


}

export { renderSimilarAdvert }
