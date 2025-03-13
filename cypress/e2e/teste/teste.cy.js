<<<<<<< HEAD
<<<<<<< HEAD
import LoginPage from "../pages/LoginPage"
import HiringPage from "../pages/HiringPage";

<<<<<<< HEAD

const login=new LoginPage()
const hiring=new HiringPage()

describe('Cypress Heroes', () => { 

    it('Deve fazer login com um usuário inválido', () => {

        login.loginFail()
=======
describe('Cypress Heroes', () => {

    const data={
        "bottomLogin":"li > .undefined",
        "EmailField":'[data-cy="email"]',
        "PassField":'[data-cy="password"]',
        "BottomHiring":'[data-cy="money"]',
        "HiringRecord":'[data-cy="saves"]',
        "bottomLike":'[data-cy="fans"]',
        "NumberOfLikes":'[data-cy="like"]'
=======
import LoginPage from "../pages/LoginPage"
import HiringPage from "../pages/HiringPage";
>>>>>>> 5c42f4f (HiringPage)


const login=new LoginPage()
const hiring=new HiringPage()

describe('Cypress Heroes', () => { 

    it('Deve fazer login com um usuário inválido', () => {
<<<<<<< HEAD
        
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.EmailField).type("test")
        cy.contains('button', 'Sign in').click();
>>>>>>> feb01b3 (Login page)
=======

        login.loginFail()
>>>>>>> 5c42f4f (HiringPage)

    });

    it('Deve fazer login com um usuário válido', () => {

<<<<<<< HEAD
<<<<<<< HEAD
        login.loginSucess()
=======
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.EmailField).type("test123")
        cy.contains('button', 'Sign in').click();

>>>>>>> feb01b3 (Login page)
=======
        login.loginSucess()
>>>>>>> 5c42f4f (HiringPage)
    });

    it('Contratar um herói', () => {
        
<<<<<<< HEAD
<<<<<<< HEAD
        login.loginSucess()
        hiring.HiringAHeroe()
=======
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.PassField).type("test123")
        cy.contains('button', 'Sign in').click();
        cy.get(data.BottomHiring).eq(0).click()
        cy.get(data.HiringRecord).eq(0).then(($span) => {
            const valorInicial = parseInt($span.text());
            cy.get('button').contains('Yes').click();
            cy.get(data.HiringRecord).should('contain', valorInicial + 1);
        });
>>>>>>> feb01b3 (Login page)
=======
        login.loginSucess()
        hiring.HiringAHeroe()
>>>>>>> 5c42f4f (HiringPage)



    });

    it('Não contratar um herói', () => {

<<<<<<< HEAD
<<<<<<< HEAD
        login.loginSucess()
        hiring.DontHireAHeroe()
        
=======
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.PassField).type("test123")
        cy.contains('button', 'Sign in').click();
        cy.get(data.BottomHiring).eq(0).click()
        cy.get(data.HiringRecord).eq(0).then(($span) => {
            const valorInicial = parseInt($span.text());
            cy.get('button').contains('No').click();
            cy.get(data.HiringRecord).should('contain', valorInicial);
        });
>>>>>>> feb01b3 (Login page)
=======
        login.loginSucess()
        hiring.DontHireAHeroe()
        
>>>>>>> 5c42f4f (HiringPage)

    });

    it('curtir um fã', () => {

<<<<<<< HEAD
<<<<<<< HEAD
        login.loginSucess()
        hiring.LikeAHeroe()
=======
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.PassField).type("test123")
        cy.contains('button', 'Sign in').click();
        cy.get(data.bottomLike).eq(0).then(($span) => {
            const valorInicialFans = parseInt($span.text());
            cy.get(data.NumberOfLikes).eq(0).click()
            cy.get(data.bottomLike).should('contain', valorInicialFans+1);
        });
>>>>>>> feb01b3 (Login page)
=======
        login.loginSucess()
        hiring.LikeAHeroe()
>>>>>>> 5c42f4f (HiringPage)

        

    });


<<<<<<< HEAD
})
=======

>>>>>>> 7a6c0a6 (pacotes,readme e spec de teste)
=======
})
>>>>>>> feb01b3 (Login page)
