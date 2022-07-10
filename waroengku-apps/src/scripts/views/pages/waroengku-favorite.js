import FavoriteWaroengkuIdb from '../../data/favoritewaroengku-idb';
import { createWaroengkuItemTemplate } from '../templates/template-creator';

const PageFavorite = {
  async render() {
    return `
      <div class="content">
        <h1 id="empty-favorite">No Favorite Waroengku Yet, <a href="#mainContent">Catalogue</a></h1>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteWaroengkuIdb.getAllWaroengku();
    const restosFavorite = document.querySelector('#restos');
    const emptyFavorite = document.querySelector('#empty-favorite');
    if (restos.length !== 0) {
      restos.forEach((resto) => {
        emptyFavorite.remove();
        restosFavorite.innerHTML += createWaroengkuItemTemplate(resto);
      });
    }
  },
};

export default PageFavorite;
