const HASHTAGS_REGEXP = /^#[a-za-яё0-9]{1,19}$/i;
const HASHTAGS_MAX_COUNT = 5;
const CAPTION_MAX_LENGTH = 140;

const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const captionInput = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error'
});

const createHashtags = (value) => value.trim().toLowerCase().split(' ');

const isUniqueHashtags = (value) => {
  const hashtags = createHashtags(value);
  const uniqueHashtag = new Set(hashtags);
  return uniqueHashtag.size === hashtags.length;
};

const isValidHashtags = (value) => createHashtags(value).every((hashtag) => HASHTAGS_REGEXP.test(hashtag));

const isMaxHashtags = (value) => createHashtags(value).length <= HASHTAGS_MAX_COUNT;

const isValidCaption = (value) => value.length <= CAPTION_MAX_LENGTH;

const addValidator = () => {
  pristine.addValidator(
    hashtagsInput,
    isUniqueHashtags,
    'Один и тот же хэш-тег не может быть использован дважды'
  );
  pristine.addValidator(
    hashtagsInput,
    isValidHashtags,
    'Хеш-тег начинается с # и может состоять только из букв и цифр длиной не больше 20 символов'
  );
  pristine.addValidator(
    hashtagsInput,
    isMaxHashtags,
    'Нельзя указать больше пяти хэш-тегов'
  );
  pristine.addValidator(
    captionInput,
    isValidCaption,
    'Длина комментария не может составлять больше 140 символов'
  );
};

const validatePristine = () => pristine.validate();

export {addValidator, validatePristine};
