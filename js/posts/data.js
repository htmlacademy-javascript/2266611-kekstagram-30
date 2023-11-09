import {getRandomInteger, getRandomArrayElement} from '../utils/utils.js';

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

const createMessage = () => {
  const message = Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES));
  return Array.from(new Set(message)).join(' ');
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
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

export {createPosts};
