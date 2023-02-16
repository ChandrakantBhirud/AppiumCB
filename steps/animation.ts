import { When } from "@wdio/cucumber-framework";
import AnimationEvents from "../pages/Animation";

//chandu test
//chandu bhai1
//Minakshi test1

const AE = new AnimationEvents();

When(/^Login$/, async()=>{

   await AE.clickMe();

})
