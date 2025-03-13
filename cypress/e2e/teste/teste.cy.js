import LoginPage from "../pages/LoginPage"
import HiringPage from "../pages/HiringPage";


const login=new LoginPage()
const hiring=new HiringPage()

describe('Cypress Heroes', () => { 

    it('Deve fazer login com um usuário inválido', () => {

        login.loginFail()

    });

    it('Deve fazer login com um usuário válido', () => {

        login.loginSucess()
    });

    it('Contratar um herói', () => {
        
        login.loginSucess()
        hiring.HiringAHeroe()



    });

    it('Não contratar um herói', () => {

        login.loginSucess()
        hiring.DontHireAHeroe()
        

    });

    it('curtir um fã', () => {

        login.loginSucess()
        hiring.LikeAHeroe()

        

    });


})