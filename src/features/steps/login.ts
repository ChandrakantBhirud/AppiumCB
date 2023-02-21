import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();


//This is branch

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    
})