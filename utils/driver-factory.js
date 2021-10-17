const {Builder} = require('selenium-webdriver');
const {Browser, PageLoadStrategy} = require('selenium-webdriver/lib/capabilities');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

function getChromeDriver() {
    return new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(
            new chrome.Options()
                .setPageLoadStrategy(PageLoadStrategy.NORMAL)
                .addArguments('--start-maximized')
        )
        .build();
}

let driver = getChromeDriver();

module.exports = driver;