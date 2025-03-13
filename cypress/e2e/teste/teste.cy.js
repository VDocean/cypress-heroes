
describe('Cypress Heroes', () => {

    const data={
        "bottomLogin":"li > .undefined",
        "EmailField":'[data-cy="email"]',
        "PassField":'[data-cy="password"]',
        "BottomHiring":'[data-cy="money"]',
        "HiringRecord":'[data-cy="saves"]',
        "bottomLike":'[data-cy="fans"]',
        "NumberOfLikes":'[data-cy="like"]'


        


    }


    
    it('Deve fazer login com um usuário inválido', () => {
        
        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.EmailField).type("test")
        cy.contains('button', 'Sign in').click();

    });

    it('Deve fazer login com um usuário válido', () => {

        cy.visit('/heroes')
        cy.get(data.bottomLogin).click()
        cy.get(data.EmailField).type("test@test.com")
        cy.get(data.EmailField).type("test123")
        cy.contains('button', 'Sign in').click();

    });

    it('Contratar um herói', () => {
        
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



    });

    it('Não contratar um herói', () => {

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

    });

    it('curtir um fã', () => {

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

        

    });


})