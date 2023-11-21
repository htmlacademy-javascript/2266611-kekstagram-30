import {getData} from '../utils/api.js';
import {renderPosts} from './thumbnails.js';
import {renderError} from '../utils/alerts.js';
import {initFilter} from './filter.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const uploadPosts = (data) => {
  initFilter(data);
  renderPosts(data);
};

const showError = () => renderError(dataError);

const initPosts = () => getData(uploadPosts, showError);

export {initPosts};
