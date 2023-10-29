import {isEscapeKey} from './utils.js';

const modalContainer = document.querySelector('.big-picture');
const modalCloseButton = modalContainer.querySelector('.big-picture__cancel');
const fullSizePhoto = modalContainer.querySelector('.big-picture__img img');
const postCaption = modalContainer.querySelector('.social__caption');
const postLikesCount = modalContainer.querySelector('.likes-count');
const commentsList = modalContainer.querySelector('.social__comments');
const commentsItem = modalContainer.querySelector('.social__comment');
const commentsCount = modalContainer.querySelector('.social__comment-count');
const commentsLoadingButton = modalContainer.querySelector('.comments-loader');

let comments = [];

const hideElements = () => {
  commentsCount.classList.add('hidden');
  commentsLoadingButton.classList.add('hidden');
};

const openModal = () => {
  modalContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeModal = () => {
  modalContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalCloseButton.removeEventListener('click', modalCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function modalCloseButtonClickHandler() {
  closeModal();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const fillPostInfo = (post) => {
  fullSizePhoto.src = post.url;
  fullSizePhoto.alt = post.description;
  postCaption.textContent = post.description;
  postLikesCount.textContent = post.likes;
};

const createComment = (comment) => {
  const newComment = commentsItem.cloneNode(true);
  const img = newComment.querySelector('.social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const fillComments = () => {
  comments.forEach((comment) => commentsList.append(createComment(comment)));
};

const renderModal = (post) => {
  commentsList.innerHTML = '';
  comments = post.comments;
  hideElements();
  openModal();
  fillPostInfo(post);
  fillComments();
};

export {renderModal};
