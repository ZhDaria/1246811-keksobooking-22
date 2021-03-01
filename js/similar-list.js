import { adverts } from './data.js';

const similarAdvertTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarListElement = document.querySelector('#map-canvas');

const similarListFragment = document.createDocumentFragment();

const advert = adverts[0];
const advertItem = similarAdvertTemplate.cloneNode(true);
const advertAvatar = advert.author;
const advertOffer = advert.offer;

advertItem.querySelector('.popup__avatar').src = advertAvatar.avatar;
advertItem.querySelector('.popup__title').textContent = advertOffer.title;
advertItem.querySelector('.popup__text--address').textContent = advertOffer.address;
advertItem.querySelector('.popup__text--price').textContent = advertOffer.price + ' ₽/ночь';
advertItem.querySelector('.popup__type').textContent = advertOffer.type[1];
advertItem.querySelector('.popup__text--capacity').textContent = advertOffer.rooms + ' комнаты для ' + advertOffer.guests + ' гостей';
advertItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertOffer.checkin + ', выезд до ' + advertOffer.checkout;
advertOffer.features.forEach((feature) => {
  advertItem.querySelector('.popup__feature--' + feature).classList.add('popup__feature--show');
})
advertItem.querySelector('.popup__description').textContent = advertOffer.description;

advertItem.querySelector('.popup__photos').innerHTML = '';
advertOffer.photos.forEach((photo) => {
  advertItem.querySelector('.popup__photos').innerHTML += '<img src="' + photo + '" class="popup__photo" width="45" height="40" alt="Фотография жилья">';
})
similarListFragment.appendChild(advertItem);
similarListElement.appendChild(similarListFragment);


