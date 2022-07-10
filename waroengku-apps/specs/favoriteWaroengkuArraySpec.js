import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getWaroengku(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((resto) => resto.id === id);
  },

  getAllWaroengku() {
    return favoriteRestos;
  },

  putWaroengku(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getWaroengku(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteWaroengku(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
