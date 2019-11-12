module.exports = {
    'My first test case'(browser) {
        browser
            .url('https://www.scottlogic.com/')
            .waitForElementVisible('.brand')
            .assert.containsText(".brand", "Scott Logic / Altogether Smarter");
    }
}