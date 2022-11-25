class Home {
  constructor(page) {
    this.page = page;
  }

  async goToPages() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Pages').click();
  }

  async goToMyProfile() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.pe-all > .ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Your profile').click();
  }

  async getAlertMessage() {
    await new Promise((r) => setTimeout(r, 100));
    const message = await this.page.$('.gh-alert-content');
    return message.innerText();
  }

  async getNotificationMessage() {
    await new Promise((r) => setTimeout(r, 100));
    const message = await this.page.$('.gh-notification-title');
    return message.innerText();
  }
}

module.exports = Home;
