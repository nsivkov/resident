const {By} = require('selenium-webdriver');
const driver = require('../utils/driver-factory');

const xpaths = {
    'emailInput': By.id('email'),
    'passwordInput': By.id('passwd'),
    'headerSignInButton': By.className('login'),
    'authenticationSignInButton': By.id('SubmitLogin'),
}

class SignInPage {

    setEmail(email) {
        return driver.findElement(xpaths.emailInput).sendKeys(email);
    }

    setPassword(password) {
        return driver.findElement(xpaths.passwordInput).sendKeys(password);
    }

    isHeaderSignInVisible() {
        return driver.findElement(xpaths.headerSignInButton).isDisplayed();
    }

    clickAuthenticationSignIn() {
        return driver.findElement(xpaths.authenticationSignInButton).click();
    }

}

module.exports = new SignInPage();