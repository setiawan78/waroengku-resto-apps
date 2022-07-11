import UrlParser from '../../routes/url-parser';
import WaroengkuDbSource from '../../data/waroengku-dbsource';
import { createWaroengkuDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteWaroengkuIdb from '../../data/favoritewaroengku-idb';
import sendReview from '../../utils/reviewer-post';

const PageDetail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await WaroengkuDbSource.detailWaroengs(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createWaroengkuDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteWaroengkuIdb,
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        rating: resto.rating,
      },
    });
    const btnSubmitReview = document.querySelector('#submit-ulasanviewer');
    const Inputname = document.querySelector('#inp-nama');
    const Inputulasan = document.querySelector('#inp-ulasan');
    btnSubmitReview.addEventListener("click", (e) => {
      e.preventDefault();
      sendReview();
    });
  },
};

export default PageDetail;
