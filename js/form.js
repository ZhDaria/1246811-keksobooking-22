const typeOfHouse = document.querySelector('#type');
const price = document.querySelector('#price');
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout')

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
})
