class Login{
    selectorsList(){
        const data={
            "bottomLogin":"li > .undefined",
            "EmailField":'[data-cy="email"]',
            "PassField":'[data-cy="password"]'
        }
        return data
    }

    loginSucess(){
        cy.visit('/heroes')
        cy.get(this.selectorsList.data.bottomLogin).click()
        cy.get(this.selectorsList.data.EmailField).type("test@test.com")
        cy.get(this.selectorsList.data.EmailField).type("test123")
        cy.contains('button', 'Sign in').click();

    }

    loginFail(){
        cy.visit('/heroes')
        cy.get(this.selectorsList.data.bottomLogin).click()
        cy.get(this.selectorsList.data.EmailField).type("test@test.com")
        cy.get(this.selectorsList.data.EmailField).type("test")
        cy.contains('button', 'Sign in').click();
    }

}
export default Login