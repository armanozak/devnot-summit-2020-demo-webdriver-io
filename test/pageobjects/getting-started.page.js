const Page = require('./page');

class GettingStartedPage extends Page {
  get $heading() {
    return $('header h1');
  }

  get path() {
    return '/docs/gettingstarted';
  }

  get title() {
    return 'Getting Started';
  }
}

module.exports = new GettingStartedPage();
