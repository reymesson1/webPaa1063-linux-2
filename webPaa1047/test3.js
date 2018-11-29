



  var seleniumWebdriver = require('selenium-webdriver');
  var chrome    = require('selenium-webdriver/chrome');

  var options   = new chrome.Options().headless();

  var driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
