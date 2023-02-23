export default class loginpage {

    get loginbtn (){
        return $('~Login');    
    }

    get username (){
        return $('~input-email');    
    }

    get password (){
        return $('~input-password');    
    }

    get submitbtn (){
        return $('~button-LOGIN');    
    }

    async login(username:string, password:string){

        if((await this.loginbtn).isEnabled){
            await this.loginbtn.click();
            console.log("Login Button is Enabled");
        } else{console.log("Login Button is disabled")}
        
        if(this.username && this.password)
        {
            setTimeout: 500000
            await this.username.setValue(username);
            await this.password.setValue(password);
            console.log("username is Enabled");

        }
     
        if((await this.submitbtn).isDisplayed)
            await this.submitbtn.click();
            console.log("submitbtn is Enabled");
    }

    }