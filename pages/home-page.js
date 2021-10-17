const {By} = require('selenium-webdriver');
const driver = require('../utils/driver-factory');

const xpaths = {
    'signInButton': By.className('login'),
}

class HomePage {

    clickSignIn() {
        return driver.findElement(xpaths.signInButton).click();
    }

}

module.exports = new HomePage();