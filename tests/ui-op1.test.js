const driver = require('../utils/driver-factory');
const props = require('../const/props');
const HomePage = require('../pages/home-page');
const SignInPage = require('../pages/sign-in-page');
const MyAccountPage = require('../pages/my-account-page');

describe('UI tests', () => {

    jest.setTimeout(30000)

    beforeEach(async () => {
        await driver.get(props.ui.baseUrl);
        await HomePage.clickSignIn();
        await SignInPage.setEmail(props.ui.email);
        await SignInPage.setPassword(props.ui.passwd);
        await SignInPage.clickAuthenticationSignIn();
        expect(await MyAccountPage.isUserNameVisible()).toBe(true);
    }, 30000);

    test('Logout test action by UI', async () => {
        await MyAccountPage.clickLogOut();
        expect(await SignInPage.isHeaderSignInVisible()).toBe(true);
    });

    test('Logout test action by /account/logout/', async () => {
        await driver.get(props.ui.baseUrl + "/index.php?mylogout=");
        expect(await SignInPage.isHeaderSignInVisible()).toBe(true);
    });

    afterEach(async () => {
        await driver.quit();
    }, 30000);

});