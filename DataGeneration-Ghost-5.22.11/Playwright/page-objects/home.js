class Home {
  constructor(page) {
    this.page = page;
  }

  async goToMyProfile() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.pe-all > .ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Your profile').click();
  }
}

module.exports = Home;
