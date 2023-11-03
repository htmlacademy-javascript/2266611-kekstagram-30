import {isEscapeKey} from './utils.js';

const form = document.querySelector('.img-upload__form');
const formUploadInput = document.querySelector('.img-upload__input');
const formModal = document.querySelector('.img-upload__overlay');
const formCloseButton = document.querySelector('.img-upload__cancel');

const openForm = () => {
  formModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCloseButton.addEventListener('click', formCloseButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeForm = () => {
  form.reset();
  formModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formCloseButton.removeEventListener('click', formCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function formCloseButtonClickHandler() {
  closeForm();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

function formUploadInputChangeHandler() {
  openForm();
}

const setFormAction = () => {
  formUploadInput.addEventListener('change', formUploadInputChangeHandler);
};

export {setFormAction};
