const HASHTAGS_REGEXP = /^#[a-za-яё0-9]{1,19}$/;
const HASHTAGS_MAX_COUNT = 5;
const CAPTION_MAX_LENGTH = 140;
const errorText = {
  INVALID_HASHTAG_UNIQUE: 'Один и тот же хэш-тег не может быть использован дважды',
  INVALID_HASHTAG_SYMBOLS: 'Хеш-тег начинается с # и может состоять только из букв и цифр длиной не больше 20 символов',
  INVALID_HASHTAG_COUNT: 'Нельзя указать больше пяти хэш-тегов',
  INVALID_CAPTION: 'Длина комментария не может составлять больше 140 символов'
};

const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const captionInput = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const createHashtags = (value) => value.trim().toLowerCase().split(' ').filter((hashtag) => Boolean(hashtag.length));

const isUniqueHashtags = (value) => {
  const hashtags = createHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const isRightHashtags = (value) => createHashtags(value).every((hashtag) => HASHTAGS_REGEXP.test(hashtag));

const isMaxCountHashtags = (value) => createHashtags(value).length <= HASHTAGS_MAX_COUNT;

const isValidCaption = (value) => value.length <= CAPTION_MAX_LENGTH;

const addValidator = () => {
  pristine.addValidator(
    hashtagsInput,
    isUniqueHashtags,
    errorText.INVALID_HASHTAG_UNIQUE
  );
  pristine.addValidator(
    hashtagsInput,
    isRightHashtags,
    errorText.INVALID_HASHTAG_SYMBOLS
  );
  pristine.addValidator(
    hashtagsInput,
    isMaxCountHashtags,
    errorText.INVALID_HASHTAG_COUNT
  );
  pristine.addValidator(
    captionInput,
    isValidCaption,
    errorText.INVALID_CAPTION
  );
};

const validatePristine = () => pristine.validate();
const resetPristine = () => pristine.reset();

export {addValidator, validatePristine, resetPristine};
