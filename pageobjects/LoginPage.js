import BasePage from './BasePage';

class LoginPage extends BasePage{

open(){
   super.open('/'); 
   browser.pause(20000);
}
    
get usernameField (){ return $("//input[@name='username']")}
get passwordField (){ return $("//input[@name='password']")}
get submitButton  (){ return $("//input[@class='button']") }

  loginApplication(username,password){
   if(username){
    this.usernameField.setValue(username)
   }
   if(password){
    this.passwordField.setValue(password)
   }
   this.submitButton.click()
 }

}
export default new LoginPage()