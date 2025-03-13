class Login{
    selectorsList(){
        const data={
<<<<<<< HEAD
            bottomLogin:'li > .undefined',
            EmailField:'[data-cy="email"]',
            PassField:'[data-cy="password"]'
=======
            "bottomLogin":"li > .undefined",
            "EmailField":'[data-cy="email"]',
            "PassField":'[data-cy="password"]'
>>>>>>> feb01b3 (Login page)
        }
        return data
    }

    loginSucess(){
        cy.visit('/heroes')
<<<<<<< HEAD
        cy.get(this.selectorsList().bottomLogin).click()
        cy.get(this.selectorsList().EmailField).type("test@test.com")
        cy.get(this.selectorsList().PassField).type("test123")
=======
        cy.get(this.selectorsList.data.bottomLogin).click()
        cy.get(this.selectorsList.data.EmailField).type("test@test.com")
        cy.get(this.selectorsList.data.EmailField).type("test123")
>>>>>>> feb01b3 (Login page)
        cy.contains('button', 'Sign in').click();

    }

    loginFail(){
        cy.visit('/heroes')
<<<<<<< HEAD
        cy.get(this.selectorsList().bottomLogin).click()
        cy.get(this.selectorsList().EmailField).type("test@test.com")
        cy.get(this.selectorsList().PassField).type("test")
=======
        cy.get(this.selectorsList.data.bottomLogin).click()
        cy.get(this.selectorsList.data.EmailField).type("test@test.com")
        cy.get(this.selectorsList.data.EmailField).type("test")
>>>>>>> feb01b3 (Login page)
        cy.contains('button', 'Sign in').click();
    }

}
export default Login