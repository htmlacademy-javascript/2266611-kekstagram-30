import {isEscapeKey} from './utils.js';

const COMMENTS_STEP = 5;
let visibleComments = 0;

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

const updateCommentsCounter = () => {
  visibleComments += COMMENTS_STEP;
  if (visibleComments > comments.length) {
    visibleComments = comments.length;
  }
  commentsShownCounter.textContent = visibleComments;
  commentsTotalCounter.textContent = comments.length;
};

const hideCommentsLoadingButton = () => {
  if (visibleComments >= comments.length) {
    commentsLoadingButton.classList.add('hidden');
    return;
  }
  commentsLoadingButton.classList.remove('hidden');
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
  const currentComments = comments.slice(visibleComments, visibleComments + COMMENTS_STEP);
  currentComments.forEach((comment) => commentsList.append(createComment(comment)));
  updateCommentsCounter();
  hideCommentsLoadingButton();
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
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function commentsLoadingButtonClickHandler() {
  fillComments();
}

const reset = () => {
  commentsList.innerHTML = '';
  visibleComments = 0;
};

const renderModal = (post) => {
  comments = post.comments;
  reset();
  openModal();
  fillPostInfo(post);
  fillComments();
};

export {renderModal};
