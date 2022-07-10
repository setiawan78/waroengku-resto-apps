import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteWaroengkuIdb from '../src/scripts/data/favoritewaroengku-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteWaroengkuIdb.getAllWaroengku()).forEach(async (resto) => {
      await FavoriteWaroengkuIdb.deleteWaroengku(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteWaroengkuIdb);
});
