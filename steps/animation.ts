import { When } from "@wdio/cucumber-framework";
import AnimationEvents from "../pages/Animation";

//chandu bhai
//Minakshi test

const AE = new AnimationEvents();

When(/^Login$/, async()=>{

   await AE.clickMe();

})
