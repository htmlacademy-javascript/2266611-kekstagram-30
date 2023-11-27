import {isEscapeKey} from '../utils/utils.js';

const COMMENTS_STEP = 5;

const modalContainer = document.querySelector('.big-picture');
const modalCloseButton = document.querySelector('.big-picture__cancel');
const fullSizePhoto = document.querySelector('.big-picture__img img');
const postCaption = document.querySelector('.social__caption');
const postLikesCounter = document.querySelector('.likes-count');
const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('.social__comment');
const commentsShownCounter = document.querySelector('.social__comment-shown-count');
const commentsTotalCounter = document.querySelector('.social__comment-total-count');
const commentsLoadingButton = document.querySelector('.comments-loader');

let comments = [];
let visibleComments = 0;

const updateCommentsCounter = () => {
  visibleComments = Math.min(visibleComments + COMMENTS_STEP, comments.length);
  commentsShownCounter.textContent = visibleComments;
};

const setLoadingButtonStatus = () => commentsLoadingButton.classList.toggle('hidden', visibleComments >= comments.length);

const createComment = (comment) => {
  const newComment = commentsItem.cloneNode(true);
  const img = newComment.querySelector('.social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const fillComments = () => {
  const currentComments = comments.slice(visibleComments, visibleComments + COMMENTS_STEP);
  currentComments.forEach((comment) => commentsList.append(createComment(comment)));
  updateCommentsCounter();
  setLoadingButtonStatus();
};

const commentsLoadingButtonClickHandler = () => {
  fillComments();
};

const fillPostInfo = (post) => {
  fullSizePhoto.src = post.url;
  fullSizePhoto.alt = post.description;
  postCaption.textContent = post.description;
  postLikesCounter.textContent = post.likes;
};

const openModal = () => {
  modalContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  commentsLoadingButton.addEventListener('click', commentsLoadingButtonClickHandler);
};

const closeModal = () => {
  modalContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalCloseButton.removeEventListener('click', modalCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  commentsLoadingButton.removeEventListener('click', commentsLoadingButtonClickHandler);
};

function modalCloseButtonClickHandler() {
  closeModal();
}

function documentKeydownHandler(evt) {
  if (isEscapeKey(evt) && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeModal();
  }
}

const resetLastPostValues = () => {
  commentsList.innerHTML = '';
  commentsTotalCounter.textContent = comments.length;
  visibleComments = 0;
};

const renderModal = (post) => {
  comments = post.comments;
  resetLastPostValues();
  openModal();
  fillPostInfo(post);
  fillComments();
};

export {renderModal};
