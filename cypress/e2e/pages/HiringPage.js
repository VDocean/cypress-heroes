class Hiring{

    selectorList(){

        const data={
        
            BottomHiring:'[data-cy="money"]',
            HiringRecord:'[data-cy="saves"]',
            bottomLike:'[data-cy="fans"]',
            NumberOfLikes:'[data-cy="like"]'
        }
        return data
    }

    HiringAHeroe(){
        cy.get(this.selectorList().BottomHiring).eq(0).click()
        cy.get(this.selectorList().HiringRecord).eq(0).then(($span) => {
            const valorInicial = parseInt($span.text());
            cy.get('button').contains('Yes').click();
            cy.get(this.selectorList().HiringRecord).should('contain', valorInicial + 1);
        });
        
    }

    DontHireAHeroe(){
        cy.get(this.selectorList().BottomHiring).eq(0).click()
        cy.get(this.selectorList().HiringRecord).eq(0).then(($span) => {
            const valorInicial = parseInt($span.text());
            cy.get('button').contains('No').click();
            cy.get(this.selectorList().HiringRecord).should('contain', valorInicial);
        });


    }

    LikeAHeroe(){
        cy.get(this.selectorList().bottomLike).eq(0).then(($span) => {
            const valorInicialFans = parseInt($span.text());
            cy.get(this.selectorList().NumberOfLikes).eq(0).click()
            cy.get(this.selectorList().bottomLike).should('contain', valorInicialFans+1);
        });

    }
}
export default Hiring