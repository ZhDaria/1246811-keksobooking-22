import { mainMarker, address } from './map.js';
import { onEscDown, onClick } from './util.js';

const USER_FORM = document.querySelector('.ad-form');
const TYPE_OF_HOUSE = USER_FORM.querySelector('#type');
const PRICE = USER_FORM.querySelector('#price');
const CHECK_IN = USER_FORM.querySelector('#timein');
const CHECK_OUT = USER_FORM.querySelector('#timeout');
const USER_TITLE = USER_FORM.querySelector('#title');
const USER_PRICE = USER_FORM.querySelector('#price');
const USER_ROOM_NUMBER = USER_FORM.querySelector('#room_number');
const USER_CAPACITY = USER_FORM.querySelector('#capacity');

const SUCCESS_MESSAGE = document.querySelector('#success').content;
const ERROR_MESSAGE = document.querySelector('#error').content;

const MAIN = document.querySelector('main');

const ERROR_BUTTON = document.querySelector ('.error__button');
const RESET_BUTTON = document.querySelector('.ad-form__reset');


TYPE_OF_HOUSE.addEventListener('change', () => {
  switch(TYPE_OF_HOUSE.value) {
    case 'bungalow':
      PRICE.placeholder = '0';
      PRICE.min = 0;
      break;

    case 'flat':
      PRICE.placeholder = '1000';
      PRICE.min = 1000;
      break;

    case 'house':
      PRICE.placeholder = '5000';
      PRICE.min = 5000;
      break;

    case 'palace':
      PRICE.placeholder = '10000';
      PRICE.min = 10000;
      break;
  }
});

CHECK_IN.addEventListener('change',  () => {
  CHECK_OUT.value = this.value;
});

CHECK_OUT.addEventListener('change',  () => {
  CHECK_IN.value = this.value;
});

USER_TITLE.addEventListener('invalid', () => {
  if (USER_TITLE.validity.tooShort) {
    USER_TITLE.setCustomValidity('Заголовок должен содержать не менее 30 символов');
  }
  else if (USER_TITLE.validity.tooLong) {
    USER_TITLE.setCustomValidity('Заголовок должен содержать не более 100 символов');
  }
  else if (USER_TITLE.validity.valueMissing) {
    USER_TITLE.setCustomValidity('Обязательное поле');
  } else {
    USER_TITLE.setCustomValidity('');
  }
});

USER_PRICE.addEventListener('invalid', () => {
  const priceValue = USER_PRICE.value;
  if (priceValue > 1000000) {
    USER_PRICE.setCustomValidity('Цена не может превышать 1 000 000 руб.')
  }
  else if (USER_PRICE.validity.valueMissing) {
    USER_PRICE.setCustomValidity('Обязательное поле');
  }
  else {
    USER_PRICE.setCustomValidity('');
  }
});



USER_CAPACITY.options[0].disabled = true;
USER_CAPACITY.options[1].disabled = true;
USER_CAPACITY.options[2].disabled = false;
USER_CAPACITY.options[3].disabled = true;


USER_ROOM_NUMBER.addEventListener('change', () => {

  Array.from(USER_CAPACITY.options).forEach((option) => {
    option.disabled = true;
  })

  switch(USER_ROOM_NUMBER.value) {
    case '1':
      USER_CAPACITY.options[2].disabled = false;
      USER_CAPACITY.options[2].selected = true;
      break;

    case '2':
      USER_CAPACITY.options[1].disabled = false;
      USER_CAPACITY.options[1].selected = true;
      USER_CAPACITY.options[2].disabled = false;
      break;

    case '3':
      USER_CAPACITY.options[0].disabled = false;
      USER_CAPACITY.options[0].selected = true;
      USER_CAPACITY.options[1].disabled = false;
      USER_CAPACITY.options[2].disabled = false;
      break;

    case '100':
      USER_CAPACITY.options[3].disabled = false;
      USER_CAPACITY.options[3].selected = true;
      break;
  }
})

USER_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch ('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        USER_FORM.reset();
        mainMarker.setLatLng({lat: 35.6895, lng: 139.69171});
        address.value = '35.6895, 139.69171';

        MAIN.appendChild(SUCCESS_MESSAGE);
        onEscDown (MAIN);
        onClick (MAIN);

      } else {
        MAIN.appendChild(ERROR_MESSAGE);
        onEscDown (MAIN);
        onClick (MAIN);
      }

    })
    .catch(() => {
      MAIN.appendChild(ERROR_MESSAGE);
      onEscDown (MAIN);
      onClick (MAIN);
      ERROR_BUTTON.addEventListener('click', () => {
        MAIN.lastChild.remove();
      })
    });
});

RESET_BUTTON.addEventListener('click', (evt) => {
  USER_FORM.reset();
  evt.preventDefault();
  mainMarker.setLatLng({lat: 35.6895, lng: 139.69171});
  address.value = '35.6895, 139.69171';
})







