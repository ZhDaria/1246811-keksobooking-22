const showAlert = (message) => {
  const ALERT_CONTAINER = document.createElement('div');
  ALERT_CONTAINER.style.zIndex = 100;
  ALERT_CONTAINER.style.position = 'absolute';
  ALERT_CONTAINER.style.left = 0;
  ALERT_CONTAINER.style.top = 0;
  ALERT_CONTAINER.style.right = 0;
  ALERT_CONTAINER.style.padding = '10px 3px';
  ALERT_CONTAINER.style.fontSize = '26px';
  ALERT_CONTAINER.style.textAlign = 'center';
  ALERT_CONTAINER.style.backgroundColor = 'red';

  ALERT_CONTAINER.textContent = message;

  document.body.append(ALERT_CONTAINER);

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

export { showAlert, onEscDown, onClick }
