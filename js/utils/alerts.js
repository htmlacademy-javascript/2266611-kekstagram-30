import {isEscapeKey} from './utils.js';

const TIME_REMOVE = 5000;

let template;

const createTemplate = (item) => {
  template = item.cloneNode(true);
  document.body.append(template);
};

const renderError = (item) => {
  createTemplate(item);

  setTimeout(() => {
    template.remove();
  }, TIME_REMOVE);
};

const renderMessage = (item, value) => {
  createTemplate(item);

  template.querySelector(`.${value}__button`).addEventListener('click', buttonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.body.addEventListener('click', (evt) => bodyClickHandler(evt, value));
  document.body.classList.add('modal-open');
};

const closeMessage = () => {
  template.remove();
  document.removeEventListener('keydown', documentKeydownHandler);
  document.body.removeEventListener('click', bodyClickHandler);
  document.body.classList.remove('modal-open');
};

function buttonClickHandler() {
  closeMessage();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function bodyClickHandler(evt, value) {
  if (evt.target.closest(`.${value}__inner`)) {
    return;
  }
  closeMessage();
}

export {renderMessage, renderError};
