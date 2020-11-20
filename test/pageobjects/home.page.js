const Page = require('./page');

class HomePage extends Page {
  get path() {
    return '/';
  }
}

module.exports = new HomePage();
