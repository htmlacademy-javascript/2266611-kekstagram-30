import {isEscapeKey} from '../utils/utils.js';
import {addValidator, validatePristine, resetPristine} from './validate.js';
import {setPhotoScale, resetPhotoScale} from './scale.js';
import {createSlider} from './filter.js';

const uploadInput = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
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
  resetPristine();
  resetPhotoScale();
  formModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formCloseButton.removeEventListener('click', formCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function formCloseButtonClickHandler() {
  closeForm();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeForm();
  }
}

function uploadInputChangeHandler() {
  openForm();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  validatePristine();
}

const initFormAction = () => {
  uploadInput.addEventListener('change', uploadInputChangeHandler);
  form.addEventListener('submit', formSubmitHandler);
  addValidator();
  setPhotoScale();
  createSlider();
};

export {initFormAction};
