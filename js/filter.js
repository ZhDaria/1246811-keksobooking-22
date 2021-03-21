import { renderSimilarAdvert } from './similar-advert.js';
import { adverts } from './data.js'


const housingType = document.querySelector('#housing-type');



housingType.addEventListener('change', () => {

  adverts.then((all) => {
    let filteredAdverts = all;
    if (housingType.value !== 'any') {
      filteredAdverts = all.filter(advert => advert.offer.type === housingType.value);
    }
    renderSimilarAdvert(filteredAdverts);
  });
});
