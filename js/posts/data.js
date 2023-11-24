import {getData} from '../server/api.js';
import {renderError} from '../utils/alerts.js';
import {initPostsFilters} from './filter.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const showSuccess = (data) => initPostsFilters(data);

const showError = () => renderError(dataError);

const initPosts = () => getData(showSuccess, showError);

export {initPosts};
