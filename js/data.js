import {showAlert} from './util.js';

const SIMILAR_ADVERT_COUNT = 10;
const adverts = fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((json) => {
    return json.slice(0, SIMILAR_ADVERT_COUNT);
  })
  .catch(() => {
    showAlert('Не удалось загрузить похожие объявления. Попробуйте обновить страницу');
  });

export { adverts }
