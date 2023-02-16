import { Given } from "@wdio/cucumber-framework";
import loginpage from "../pages/loginPage";

const lp = new loginpage();

//test11
//test22
//test33
//Pune1
//London1
//test1
//test2
//test3
//Pune
//London

Given(/^Login applcaition with (.+) and (.+)$/, async(user, pwd)=>{
    await lp.login(user, pwd);  
    setTimeout: 500000
})