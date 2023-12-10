
describe('Тестирование формы логина', function () {
    beforeEach(() => {
        cy.visit('https://login.qa.studio/');
    });

    it('Правильные учетные данных', function () {
        cy.get("input#mail").type('german@dolnikov.ru');
        cy.get("input#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
   
     });

    it('Забыли пароль', function () {
        cy.get("#forgotEmailButton").click();
        cy.get("input#mailForgot").type('mail@example.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    });

    it('Неправильный пароль', function () {
        cy.get("input#mail").type('german@dolnikov.ru');
        cy.get("input#pass").type('wrongpass');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Неправильный логин', function () {
        cy.get("input#mail").type('wrongmail@example.com');
        cy.get("input#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Неправильный email', function () {
        cy.get("input#mail").type('germandolnikov.ru');
        cy.get("input#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    });

    it('Заглавные буквы в email', function () {
        cy.get("input#mail").type('GerMan@Dolnikov.ru');
        cy.get("input#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
     });

     afterEach(() => {
        cy.get('#exitMessageButton').should('exist');
    });
 })