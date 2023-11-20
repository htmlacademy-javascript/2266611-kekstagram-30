import {isEscapeKey} from './utils.js';

const TIME_REMOVE = 5000;

let template;

const renderMessage = (item, value) => {
  template = item.cloneNode(true);
  document.body.append(template);

  const messageButton = template.querySelector(`.${value}__button`);
  messageButton.addEventListener('click', messageButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.body.addEventListener('click', bodyClickHandler);
};

const closeMessage = () => {
  template.remove();
  document.removeEventListener('keydown', documentKeydownHandler);
  document.body.removeEventListener('click', bodyClickHandler);
};

function messageButtonClickHandler() {
  closeMessage();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function bodyClickHandler(evt) {
  const success = evt.target.closest('.success__inner');
  const error = evt.target.closest('.error__inner');

  if (success || error) {
    return;
  }
  closeMessage();
}

const renderError = (item) => {
  template = item.cloneNode(true);
  document.body.append(template);

  setTimeout(() => {
    template.remove();
  }, TIME_REMOVE);
};

export {renderMessage, renderError};
