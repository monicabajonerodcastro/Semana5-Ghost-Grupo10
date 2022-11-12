const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I click the settings button', async function () {
  const element = await this.driver.$('a[href="#/settings/"]');
  return await element.click();
});

When('I click the general button', async function () {
  const element = await this.driver.$('a[href="#/settings/general/"]');
  return await element.click();
});

When('I click the title and description expand button', async function () {
  const element = await this.driver.$('span*=Expand');
  const parent = await element.$('..');
  return await parent.click();
});

When('I enter the new website title {kraken-string}', async function (location) {
  const element = await this.driver.$('.ember-text-field.gh-input.ember-view');
  return await element.setValue(location);
});

Then('I see the success update title message', async function () {
  const element = await this.driver.$$('span*=Saved');
  expect(element).to.exist;
});
