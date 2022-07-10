const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('No Favorite Waroengku Yet, Catalogue', '#empty-favorite');
});

Scenario('Add Resto to Favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.waroengku-item__content__link', 30);
  I.seeElement('.waroengku-item__content__link');
  I.waitForElement('.waroengku-item__content__link', 7);
  const firstRestaurantName = await I.grabTextFrom(locate('.waroengku-item__content__link .waroengku-item__content__title').first());
  I.click(locate('.waroengku-item__content__link').first());
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.waroengku-item__content__link');
  const favoriteRestaurantName = await I.grabTextFrom('.waroengku-item__content__link .waroengku-item__content__title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('add then Remove Resto from Favorite restaurant list', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.waroengku-item__content__link', 30);
  I.seeElement('.waroengku-item__content__link');
  I.waitForElement('.waroengku-item__content__link', 7);
  I.click(locate('.waroengku-item__content__link').first());
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.waroengku-item__content__link');
  I.click('.waroengku-item__content__link');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No Favorite Waroengku Yet, Catalogue', '#empty-favorite');
});
