const {By} = require('selenium-webdriver');
const driver = require('../utils/driver-factory');

const xpaths = {
    'userName': By.className('account'),
    'logOutButton': By.className('logout')
}

class MyAccountPage {

    isUserNameVisible() {
        return driver.findElement(xpaths.userName).isDisplayed();
    }

    clickLogOut() {
        return driver.findElement(xpaths.logOutButton).click();
    }

}

module.exports = new MyAccountPage();