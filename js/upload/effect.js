const EFFECTS = {
  chrome: {
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    filter: 'brightness',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    unit: '',
  },
  default: {
    filter: 'none',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
};

const previewPhoto = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderInput = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');

const setSliderEffect = (value) => EFFECTS[value] || EFFECTS.default;

const setSliderStatus = (effect) => sliderContainer.classList.toggle('hidden', effect === EFFECTS.default);

const updateSlider = (effect) => {
  slider.noUiSlider.off('update');
  slider.noUiSlider.on('update', () => {
    sliderInput.value = +slider.noUiSlider.get();
    previewPhoto.style.filter = (effect === EFFECTS.default)
      ? null : `${effect.filter}(${sliderInput.value}${effect.unit})`;
  });
};

const createSlider = (value) => {
  const effect = setSliderEffect(value);
  setSliderStatus(effect);
  noUiSlider.create(slider, {
    range: {
      min: effect.range.min,
      max: effect.range.max,
    },
    start: effect.start,
    step: effect.step,
    connect: 'lower',
  });
  updateSlider(effect);
};

const updateSliderOptions = (value) => {
  const effect = setSliderEffect(value);
  setSliderStatus(effect);
  slider.noUiSlider.updateOptions({
    range: {
      min: effect.range.min,
      max: effect.range.max,
    },
    start: effect.start,
    step: effect.step,
  });
  updateSlider(effect);
};

export {createSlider, updateSliderOptions};
