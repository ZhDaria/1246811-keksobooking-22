const getRandomInteger = function(min, max) {
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


const getRandomNumber = function(min, max, digitsCount) {

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
    return (Math.random() * (max - min + 0.00001) + min).toFixed(digitsCount);
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '26px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

};


const onEscDown = (element) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      element.lastChild.remove();
    }
  });
}

const onClick = (element) => {
  document.addEventListener('click', () => {
    element.lastChild.remove();
  })
}


export { getRandomInteger, getRandomNumber, showAlert, onEscDown, onClick }
