import { mainMarker, address } from './map.js';
import { onEscDown, onClick } from './util.js';

const userForm = document.querySelector('.ad-form');
const typeOfHouse = userForm.querySelector('#type');
const price = userForm.querySelector('#price');
const checkIn = userForm.querySelector('#timein');
const checkOut = userForm.querySelector('#timeout');
const userTitle = userForm.querySelector('#title');
const userPrice = userForm.querySelector('#price');
const userRoomNumber = userForm.querySelector('#room_number');
const userCapacity = userForm.querySelector('#capacity');

const successMessage = document.querySelector('#success').content;
const errorMessage = document.querySelector('#error').content;

const main = document.querySelector('main');

const errorButton = document.querySelector ('.error__button');
const resetButton = document.querySelector('.ad-form__reset');


typeOfHouse.addEventListener('change', function () {
  if (this.value === 'bungalow') {
    price.placeholder = '0';
    price.min = 0;
  }

  else if (this.value === 'flat') {
    price.placeholder = '1000';
    price.min = 1000;
  }

  else if (this.value === 'house') {
    price.placeholder = '5000';
    price.min = 5000;
  }

  else if (this.value === 'palace') {
    price.placeholder = '10000';
    price.min = 10000;
  }
});

checkIn.addEventListener('change', function () {
  checkOut.value = this.value;
});

checkOut.addEventListener('change', function () {
  checkIn.value = this.value;
});

userTitle.addEventListener('invalid', () => {
  if (userTitle.validity.tooShort) {
    userTitle.setCustomValidity('Заголовок должен содержать не менее 30 символов');
  }
  else if (userTitle.validity.tooLong) {
    userTitle.setCustomValidity('Заголовок должен содержать не более 100 символов');
  }
  else if (userTitle.validity.valueMissing) {
    userTitle.setCustomValidity('Обязательное поле');
  } else {
    userTitle.setCustomValidity('');
  }
});

userPrice.addEventListener('invalid', () => {
  const priceValue = userPrice.value;
  if (priceValue > 1000000) {
    userPrice.setCustomValidity('Цена не может превышать 1 000 000 руб.')
  }
  else if (userPrice.validity.valueMissing) {
    userPrice.setCustomValidity('Обязательное поле');
  }
  else {
    userPrice.setCustomValidity('');
  }
});



userCapacity.options[0].disabled = true;
userCapacity.options[1].disabled = true;
userCapacity.options[2].disabled = false;
userCapacity.options[3].disabled = true;


userRoomNumber.addEventListener('change', () => {

  Array.from(userCapacity.options).forEach((option) => {
    option.disabled = true;
  })

  switch(userRoomNumber.value) {
    case '1':
      userCapacity.options[2].disabled = false;
      userCapacity.options[2].selected = true;
      break;

    case '2':
      userCapacity.options[1].disabled = false;
      userCapacity.options[1].selected = true;
      userCapacity.options[2].disabled = false;
      break;

    case '3':
      userCapacity.options[0].disabled = false;
      userCapacity.options[0].selected = true;
      userCapacity.options[1].disabled = false;
      userCapacity.options[2].disabled = false;
      break;

    case '100':
      userCapacity.options[3].disabled = false;
      userCapacity.options[3].selected = true;
      break;
  }
})

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch ('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        userForm.reset();
        mainMarker.setLatLng({lat: 35.6895, lng: 139.69171});
        address.value = '35.6895, 139.69171';

        main.appendChild(successMessage);
        onEscDown (main);
        onClick (main);

      } else {
        main.appendChild(errorMessage);
        onEscDown (main);
        onClick (main);
      }

    })
    .catch(() => {
      main.appendChild(errorMessage);
      onEscDown (main);
      onClick (main);
      errorButton.addEventListener('click', () => {
        main.lastChild.remove();
      })
    });
});

resetButton.addEventListener('click', (evt) => {
  userForm.reset();
  evt.preventDefault();
  mainMarker.setLatLng({lat: 35.6895, lng: 139.69171});
  address.value = '35.6895, 139.69171';
})







