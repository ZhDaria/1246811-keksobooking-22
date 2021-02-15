let getRandomInteger = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max < min) {
    alert('Нарушен порядок ввода значений "от" и "до"');
  }

  else if (max === min) {
    alert('Диапазон значений должен варьироваться минимум на единицу');
  }

  else if (min < 0 || max <= 0) {
    alert('Диапазон значений должен быть только положительным');
  }

  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomInteger(10, 20);


let getRandomNumber = function(min, max, digitsCount) {

  if (max < min) {
    alert('Нарушен порядок ввода значений "от" и "до"');
  }

  else if (max === min) {
    alert('Значение "до" должно превышать значение "от"');
  }

  else if (min < 0 || max <= 0) {
    alert('Диапазон значений должен быть только положительным');
  }

  else if (typeof digitsCount == 'undefined') {
    alert('Не указано количество знаков после запятой')
  }

  else {
    return (Math.random() * (max - min + 1) + min).toFixed(digitsCount);
  }
};

getRandomNumber(3, 100, 5);
