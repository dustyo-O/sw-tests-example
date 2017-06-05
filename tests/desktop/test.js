var assert = require('chai').assert;

describe('Вход на сайт', function() {
    it('Ошибка если email не заполнен', function() {
        return this.browser
            .url('http://dusty.dusty/')
            .waitForVisible('.container')
            .click('button*=Войти')
            .isVisible('.error-message')
            .then(function(visible) {
                assert.equal(visible, true)
            })
            .getText('.error-message')
            .then(function(text) {
                assert.equal(text, 'Нужно заполнить email')
            });
    });
});