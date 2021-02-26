import { getRandomInteger, getRandomNumber } from './util.js'

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const TYPE = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
}

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
]

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const getRandomArray = function (array) {
  let maxRandomInteger = array.length - 1;
  let newArray = [];
  let newArrayLength = getRandomInteger(0, maxRandomInteger);

  for (let counter = 0; counter <= newArrayLength;) {
    let keyArray = array[getRandomInteger(0, maxRandomInteger)];

    if (newArray.indexOf(keyArray) === -1) {
      newArray.push(keyArray);
      counter++
    }
  }

  return newArray;
}

const createAdvert = function () {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'Сдается квартира в аренду',
      address: '35.65000, 139.70000',
      price: getRandomNumber(1, 10000, 2),
      type: Object.entries(TYPE)[getRandomInteger(0, 3)],
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 100),
      checkin: CHECKIN[getRandomInteger(0, 2)],
      checkout: CHECKOUT[getRandomInteger(0, 2)],
      features: getRandomArray(FEATURES),
      description: 'Очень уютная и чистая квартира',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5),
    },
  }
}

let adverts = [];

for (let i = 0; i < 10; i++) {
  adverts.push(createAdvert());
}

export { adverts }
