import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteWaroengkuIdb from '../../src/scripts/data/favoritewaroengku-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteWaroengkuIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
