import {getData} from '../utils/api.js';
import {renderPosts} from './thumbnails.js';
import {renderMessage} from '../utils/messages.js';

const GET_DATA_URL = 'https://30.javascript.pages.academy/kekstagram/data';

const getSuccess = (data) => {
  renderPosts(data);
};

const showFail = () => renderMessage();

const initPosts = () => getData(GET_DATA_URL, getSuccess, showFail);

export {initPosts};
