import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();

<<<<<<< HEAD
//test1
//test2
//test3
//Pune11
//London22
=======
//test11
//test22
//test33
//Pune
//London
>>>>>>> c61126074889761a275efef6c4e0442f920e7033

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    setTimeout: 500000
})