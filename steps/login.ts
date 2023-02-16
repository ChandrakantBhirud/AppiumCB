import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();

<<<<<<< HEAD
//Minakshi 
=======
//Chandra B

>>>>>>> 34f1fcfeba6fbc407410b705660b1d37b5a8e196

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    setTimeout: 500000
})