let getRandomInteger = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max < min) {
    console.log('Нарушен порядок ввода значений "от" и "до"');
  }

  else if (max === min) {
    console.log(`Диапазон значений должен варьироваться минимум на единицу`);
  }

  else {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

let getRandomNumber = function(min, max) {

  if (max < min) {
    console.log('Нарушен порядок ввода значений "от" и "до"');
  }

  else if (max === min) {
    console.log('Значение "до" должно превышать значение "от"');
  }

  else {

    return Math.random() * (max - min + 1) + min;
  }
};
