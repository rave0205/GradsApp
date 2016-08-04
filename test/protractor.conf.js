exports.config = {
    specs: [
        './web/it/gridIT.js',
        './web/it/homeIT.js'
    ],
    seleniumServerJar: './../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
    capabilities: {'browserName': 'chrome'},

    baseUrl: 'http://localhost:9999/',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000
    },

    onPrepare: function () {
        browser.driver.manage().window().setSize(1920, 1080);
    }
};