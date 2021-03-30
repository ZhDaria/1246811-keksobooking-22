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

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { showAlert, isEscEvent }
