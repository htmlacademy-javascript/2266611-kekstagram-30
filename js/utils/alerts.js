import {isEscapeKey} from './utils.js';

const TIME_REMOVE = 5000;

let template;

const renderMessage = (item, value) => {
  template = item.cloneNode(true);
  document.body.append(template);

  const messageButton = template.querySelector(`.${value}__button`);
  messageButton.addEventListener('click', messageButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeMessage = () => {
  template.remove();
  document.removeEventListener('keydown', documentKeydownHandler);
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

const renderError = (item) => {
  template = item.cloneNode(true);
  document.body.append(template);

  setTimeout(() => {
    template.remove();
  }, TIME_REMOVE);
};

export {renderMessage, renderError};
