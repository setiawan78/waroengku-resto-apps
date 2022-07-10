import FavoriteWaroengkuIdb from '../src/scripts/data/favoritewaroengku-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteWaroengkuIdb.putWaroengku({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteWaroengkuIdb.deleteWaroengku(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteWaroengkuIdb.getAllWaroengku()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavoriteWaroengkuIdb.deleteWaroengku(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteWaroengkuIdb.getAllWaroengku()).toEqual([]);
  });
});
