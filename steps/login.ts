import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();

//test
<<<<<<< HEAD
//test
//test MB
//Pune
=======
//London
>>>>>>> 56a428153741a6536a1c220445a186d85cbf0aa2

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    setTimeout: 500000
})