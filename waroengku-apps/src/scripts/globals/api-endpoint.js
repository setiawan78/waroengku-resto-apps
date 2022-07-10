import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  PICTURE: `${CONFIG.BASE_IMAGE_URL}`,
  SEARCH: (query) => `${CONFIG}search?q=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
