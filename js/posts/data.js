import {getData} from '../server/api.js';
import {renderError} from '../utils/alerts.js';
import {initPostsFilters} from './filter.js';

const GET_DATA_URL = 'https://30.javascript.pages.academy/kekstagram/data';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const showSuccess = (data) => initPostsFilters(data);

const showError = () => renderError(dataError);

const initPosts = () => getData(GET_DATA_URL, showSuccess, showError);

export {initPosts};
