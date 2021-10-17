const {Builder, By, Key} = require('selenium-webdriver')
const props = require('../const/props');

describe('UI tests', () => {

    let driver;
    jest.setTimeout(30000)

    beforeEach(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .build();
        driver.manage().window().maximize();
        await driver.get(props.ui.baseUrl);
        await driver.findElement(By.className('login')).click();
        await driver.findElement(By.id('email')).sendKeys(props.ui.email);
        await driver.findElement(By.id('passwd')).sendKeys(props.ui.passwd, Key.RETURN);
        expect(await driver.findElement(By.className('account')).isDisplayed()).toBe(true);
    }, 30000);

    test('Logout test action by UI', async () => {
        await driver.findElement(By.className('logout')).click();
        expect(await driver.findElement(By.className('login')).isDisplayed()).toBe(true);
    });

    test('Logout test action by /account/logout/', async () => {
        await driver.get(props.ui.baseUrl + "/index.php?mylogout=");
        expect(await driver.findElement(By.className('login')).isDisplayed()).toBe(true);
    });

    afterEach(async () => {
        await driver.quit();
    }, 30000);
});