/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.content__heading');
  I.see('Your Liked Resto');
});

Scenario('Liking one resto', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-item a', 10);

  I.click(locate('.resto-item a').first());

  I.waitForElement('#likeButton', 10);

  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.waitForElement('.resto-item', 10);

  I.seeElement('.resto-item');
});

Scenario('Unliking one resto', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item a');

  I.click('.resto-item a');

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item');

  I.click(locate('.resto-item a').first());

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.waitForElement('.content__heading', 10);
  I.see('Your Liked Resto');
});
