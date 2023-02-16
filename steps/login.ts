import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();

//test
<<<<<<< HEAD
//test
//test MB
//Pune
=======
>>>>>>> 9e51e15f8fc5f08fde3b43df60e911c40f714b6d
//London

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    setTimeout: 500000
})