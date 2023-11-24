import {renderPosts} from './thumbnails.js';
import {shuffleArray, debounce} from '../utils/utils.js';

const FILTER_DEFAULT = 'filter-default';
const FILTER_RANDOM = 'filter-random';
const FILTER_DISCUSSED = 'filter-discussed';
const SHUFFLE_COUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const filters = document.querySelector('.img-filters__form');
const currentFilterId = document.querySelector('.img-filters__button--active').id;

const sortPhotos = (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length);

const shufflePhotos = (data) => shuffleArray(data.slice()).slice(0, SHUFFLE_COUNT);

const clearPhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((item) => item.remove());
};

const filterPhotos = (id, data) => {
  clearPhotos();
  switch(id) {
    case FILTER_DISCUSSED:
      return sortPhotos(data);
    case FILTER_RANDOM:
      return shufflePhotos(data);
    case FILTER_DEFAULT:
      return data;
  }
};

const debounceRender = debounce((id, data) => renderPosts(filterPhotos(id, data)));

function filtersClickHandler(evt, data) {
  if (!evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    debounceRender(evt.target.id, data);
  }
}

const initPostsFilters = (data) => {
  renderPosts(filterPhotos(currentFilterId, data));
  filtersContainer.classList.remove('img-filters--inactive');
  filters.addEventListener('click', (evt) => filtersClickHandler(evt, data));
};

export {initPostsFilters};
