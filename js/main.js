const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'На 90 % состою из «важных» дел',
  'Плюс одна страна в копилку',
  'Необычное зрелище',
  'Я, снова я и опять я',
  'Ловля момента!'
];

const NAMES = ['Дарья', 'Мирон', 'Кирилл', 'Милана', 'Степан', 'Василиса', 'Софья'];

const POST_COUNT = 25;
let postId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: shuffleArray(MESSAGES).slice(0, getRandomInteger(1, 2)).join(' '),
  name: getRandomArrayElement(NAMES)
});

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const createPosts = () => Array.from({length: POST_COUNT}, createPost);

createPosts();
