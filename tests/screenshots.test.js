// browser.url('http://mozaic.adeo.cloud/Components/Checkbox/code/'); // for base url see wdio.conf.js
// browser.pause(1000);

// browser.takeSnapshot('test')
const chromedriver = require('chromedriver')
const { remote } = require('webdriverio')
const { ClassicRunner, Eyes, Target } = require('@applitools/eyes-webdriverio')
const { Configuration } = require('@applitools/eyes-selenium')

let eyes

describe('wdio5', function() {
  //   before(async function () {
  //       console.log('START')
  //     chromedriver.start();
  //   });

  //   beforeEach(async () => {
  //     const chrome = {
  //       capabilities: {
  //         browserName: 'chrome'
  //       }
  //     };
  //     browser = await remote(chrome);
  //   });

  //   afterEach(async () => {
  //     await browser.deleteSession();
  //     await eyes.abortIfNotClosed();

  //     const results = await eyes.getRunner().getAllTestResults(false);
  //     console.log(results);
  //   });

  //   after(async function () {
  //     chromedriver.stop();
  //   });

  it('Mozaic component test', async () => {
    const runner = new ClassicRunner()

    eyes = new Eyes(runner)
    const configuration = new Configuration()
    configuration.setAppName('Mozaic')
    configuration.setTestName('Button')
    configuration.setApiKey('4A5z98jZhiiZKMkRbFfAqmPkCzk95Gq2l100rBqL4lD7M110')
    eyes.setConfiguration(configuration)
    await eyes.open(browser)

    //http://localhost:8000/src/docs/Components/Buttons/previews/button-icon-only
    //http://localhost:8000/src/docs/Components/Buttons/previews/intro
    await browser.url(
      'http://localhost:8000/src/docs/Components/Buttons/previews/button-icon-only'
    )

    // Visual checkpoint #1.
    await eyes.check('button', Target.window())

    // Click the "Log in" button.
    // await driver.click(By.id('log-in'));
    // const loginButton = await browser.$('#log-in');
    // await loginButton.click();

    // Visual checkpoint #2.
    // await eyes.check('App Window', Target.window());

    await eyes.closeAsync()
  })
})
