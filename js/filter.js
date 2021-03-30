/* global _:readonly */

import { renderSimilarAdvert } from './similar-advert.js';
import { adverts } from './data.js'

const FILTER_ADVERT_FORM = document.querySelector('#filter-advert-form');
const HOUSING_TYPE = document.querySelector('#housing-type');
const HOUSING_PRICE = document.querySelector('#housing-price');
const HOUSING_ROOMS = document.querySelector('#housing-rooms');
const HOUSING_GUESTS = document.querySelector('#housing-guests');
const HOUSING_FEATURES = document.querySelectorAll('.map__checkbox');
const DELAY = 500;
const FILTER_COUNTER = FILTER_ADVERT_FORM.querySelectorAll('input, select').length
const LOWEST_PRICE = 10000;
const HIGHEST_PRICE = 50000;

adverts.then((allAdverts) => {
  FILTER_ADVERT_FORM.addEventListener('change', _.debounce(
    () => {
      let filteredAdverts = allAdverts.filter(advert => {
        let filterCount = 0;

        switch(HOUSING_TYPE.value) {
          case 'any':
            filterCount++;
            break;

          default:
            if (advert.offer.type === HOUSING_TYPE.value) {
              filterCount++;
            }
        }

        switch(HOUSING_PRICE.value) {
          case 'any':
            filterCount++;
            break;

          case 'low':
            if (advert.offer.price < LOWEST_PRICE) {
              filterCount++;
            }
            break;

          case 'middle':
            if (advert.offer.price < HIGHEST_PRICE && advert.offer.price >= LOWEST_PRICE) {
              filterCount++;
            }
            break

          case 'high':
            if (advert.offer.price >= HIGHEST_PRICE) {
              filterCount++;
            }
        }

        switch(HOUSING_ROOMS.value) {
          case 'any':
            filterCount++;
            break;
          case '1':
            if (advert.offer.rooms === 1) {
              filterCount++;
            }
            break;
          case '2':
            if (advert.offer.rooms === 2) {
              filterCount++;
            }
            break;
          case '3':
            if (advert.offer.rooms === 3) {
              filterCount++;
            }
            break;
        }

        switch(HOUSING_GUESTS.value) {
          case 'any':
            filterCount++;
            break;
          case '0':
            if(advert.offer.guests === 0) {
              filterCount++;
            }
            break;
          case '1':
            if( advert.offer.guests === 1) {
              filterCount++;
            }
            break;
          case '2':
            if(advert.offer.guests === 2) {
              filterCount++;
            }
            break;
        }

        HOUSING_FEATURES.forEach((feature) => {
          if (feature.checked) {
            if (advert.offer.features.includes(feature.value)) {
              filterCount++;
            }
          } else {
            filterCount++;
          }
        });


        return filterCount === FILTER_COUNTER;
      });

      renderSimilarAdvert(filteredAdverts);
    },
    DELAY,
  ))
})
