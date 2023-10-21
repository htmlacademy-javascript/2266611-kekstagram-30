import {createPosts} from './create-posts.js';

const posts = createPosts();
const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderPosts = () => {
  posts.forEach((post) => {
    const newPhoto = template.cloneNode(true);
    const img = newPhoto.querySelector('.picture__img');
    img.src = post.url;
    img.alt = post.description;
    newPhoto.querySelector('.picture__likes').textContent = post.likes;
    newPhoto.querySelector('.picture__comments').textContent = post.comments.length;
    fragment.append(newPhoto);
  });
  container.append(fragment);
};

export {renderPosts};
