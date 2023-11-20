import {renderModal} from './modal.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createPhoto = (post) => {
  const newPhoto = template.cloneNode(true);
  const img = newPhoto.querySelector('.picture__img');
  img.src = post.url;
  img.alt = post.description;
  newPhoto.querySelector('.picture__likes').textContent = post.likes;
  newPhoto.querySelector('.picture__comments').textContent = post.comments.length;
  newPhoto.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderModal(post);
  });
  fragment.append(newPhoto);
};

const renderPosts = (posts) => {
  posts.forEach((post) => createPhoto(post));
  container.append(fragment);
};

export {renderPosts};
