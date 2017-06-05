gemini.suite('Кнопка Войти', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.btn-submit')
        .capture('plain');
});