const rangeElement = document.querySelector('.effect-level__slider');

const createSlider = () => {
  noUiSlider.create(rangeElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

export {createSlider};
