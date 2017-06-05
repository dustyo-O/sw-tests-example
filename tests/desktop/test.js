var assert = require('chai').assert;

describe('Вход на сайт', function() {

    beforeEach(function() {
        return this.browser
            .url('http://dusty.dusty/')
            .waitForVisible('.container');
    });

    it('Ошибка если email не заполнен', function() {
        return this.browser
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

    it('Переход на сайт при успешной авторизации', function() {
        return this.browser
            .setValue('.email-input', 'admin')
            .setValue('.password-input', 'password')
            .click('button*=Войти')
            .waitForVisible('.site-wrapper')
            .getUrl()
            .then(function(url) {
                assert.equal(url, 'http://dusty.dusty/site.html')
            });
    });

    it('Ошибка при неуспешной авторизации', function() {
        return this.browser
            .setValue('.email-input', 'user')
            .setValue('.password-input', 'wrongpassword')
            .click('button*=Войти')
            .isVisible('.error-message')
            .then(function(visible) {
                assert.equal(visible, true)
            })
            .getText('.error-message')
            .then(function(text) {
                assert.equal(text, 'Неверные данные')
            });
    });
});