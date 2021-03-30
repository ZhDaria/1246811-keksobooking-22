const createAdvertPopup = (advert) => {
  const SIMILAR_ADVERT_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');

  const SIMILAR_LIST_FRAGMENT = document.createDocumentFragment();

  const ADVERT_ITEM = SIMILAR_ADVERT_TEMPLATE.cloneNode(true);
  const ADVERT_AVATAR = advert.author;
  const ADVERT_OFFER = advert.offer;

  ADVERT_ITEM.querySelector('.popup__avatar').src = ADVERT_AVATAR.avatar;
  ADVERT_ITEM.querySelector('.popup__title').textContent = ADVERT_OFFER.title;
  ADVERT_ITEM.querySelector('.popup__text--address').textContent = ADVERT_OFFER.address;
  ADVERT_ITEM.querySelector('.popup__text--price').textContent = ADVERT_OFFER.price + ' ₽/ночь';
  ADVERT_ITEM.querySelector('.popup__type').textContent = ADVERT_OFFER.type[1];
  ADVERT_ITEM.querySelector('.popup__text--capacity').textContent = ADVERT_OFFER.rooms + ' комнаты для ' + ADVERT_OFFER.guests + ' гостей';
  ADVERT_ITEM.querySelector('.popup__text--time').textContent = 'Заезд после ' + ADVERT_OFFER.checkin + ', выезд до ' + ADVERT_OFFER.checkout;
  ADVERT_OFFER.features.forEach((feature) => {
    ADVERT_ITEM.querySelector('.popup__feature--' + feature).classList.add('popup__feature--show');
  })
  ADVERT_ITEM.querySelector('.popup__description').textContent = ADVERT_OFFER.description;

  ADVERT_ITEM.querySelector('.popup__photos').innerHTML = '';

  const photoNode = document.createElement('img');
  photoNode.className = 'popup__photo';
  photoNode.width = 45;
  photoNode.height = 40;
  photoNode.alt = 'Фото жилья';

  ADVERT_OFFER.photos.forEach((photo) => {
    photoNode.src = photo;
    ADVERT_ITEM.querySelector('.popup__photos').appendChild(photoNode);
  });

  SIMILAR_LIST_FRAGMENT.appendChild(ADVERT_ITEM);

  return ADVERT_ITEM;
}

export { createAdvertPopup };



