import {isEscapeKey} from '../utils/utils.js';
import {validatePristine, setPristine, resetPristine} from './validate.js';
import {setPhotoScale, resetPhotoScale} from './scale.js';
import {createSlider, updateSliderOptions} from './effect.js';

const uploadInput = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const formModal = document.querySelector('.img-upload__overlay');
const formCloseButton = document.querySelector('.img-upload__cancel');
const effectsControl = document.querySelector('.effects__list');
const checkedEffect = document.querySelector('.effects__radio[checked]');

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
  updateSliderOptions(checkedEffect.value);
  formModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formCloseButton.removeEventListener('click', formCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function formCloseButtonClickHandler() {
  closeForm();
}

function documentKeydownHandler(evt) {
  const hashtagsInput = evt.target.closest('.text__hashtags');
  const captionInput = evt.target.closest('.text__description');

  if (isEscapeKey(evt) && !hashtagsInput && !captionInput) {
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

function effectsControlChangeHandler(evt) {
  updateSliderOptions(evt.target.value);
}

const initFormAction = () => {
  setPristine();
  setPhotoScale();
  createSlider(checkedEffect.value);
  uploadInput.addEventListener('change', uploadInputChangeHandler);
  form.addEventListener('submit', formSubmitHandler);
  effectsControl.addEventListener('change', effectsControlChangeHandler);
};

export {initFormAction};
