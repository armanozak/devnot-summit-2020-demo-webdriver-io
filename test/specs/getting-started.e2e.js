const { HomePage, GettingStartedPage } = require('../pageobjects');

describe('Webdriver.io', () => {
  it('should navigate to Getting Started page', async () => {
    await HomePage.open();
    await HomePage.clickToMenuItem(GettingStartedPage);

    const heading = await (await GettingStartedPage.$heading).getText();
    expect(heading).toContain(GettingStartedPage.title);
    await GettingStartedPage.takeScreenshot('getting-started');
  });
});
