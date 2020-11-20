const fse = require('fs-extra');
const path = require('path');

module.exports = class Page {
  get path() {
    throw new Error('The path getter should be overridden.');
  }

  getMenuItem(page) {
    return $('nav a[href^="' + page.path + '"]');
  }

  async clickToMenuItem(page) {
    await (await this.getMenuItem(page)).click();
  }

  open() {
    return browser.url(this.path);
  }

  async takeScreenshot(name) {
    await fse.ensureDir('./screenshots/');
    const filepath = path.join('./screenshots/', `${name}.png`);
    await browser.saveScreenshot(filepath);
    process.emit('test:screenshot', filepath);
    return this;
  }
};
