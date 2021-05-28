var testdataConfig = require('../test_data/testdataConfig');
import BasePage from './BasePage';

class LoginInfoPage extends BasePage{
open(){
    super.open('/'); 
    browser.pause(20000);
}

    get loginInfo (){ return $("//a[text()='Forgot login info?']")}
    get firstName (){return $("//input[@id='firstName']")}
    get lastName (){return $("//input[@id='lastName']")}
    get address (){return $("//input[@id='address.street']")}
    get city (){return $("//input[@id='address.city']")}
    get state (){return $("//input[@id='address.state']")}
    get zipCode(){return $("//input[@id='address.zipCode']")}
    get ssnNumber(){return $("//input[@id='ssn']")}
    get getLoginInfoButton(){return $("//input[@value='Find My Login Info']")}
    get userLookUpMessage(){return $("//p[text()='Your login information was located successfully. You are now logged in. ']")}

    findUserInformation() {

        this.loginInfo.click();
        this.firstName.setValue(testdataConfig.firstName);
        this.lastName.setValue(testdataConfig.lastName);
        this.address.setValue(testdataConfig.address);
        this.city.setValue(testdataConfig.city);
        this.state.setValue(testdataConfig.state);
        this.zipCode.setValue(testdataConfig.zipCode);
        this.ssnNumber.setValue(testdataConfig.ssnNumber);
    }

    getUserInformation(){
       this.getLoginInfoButton.click();
    }

    userLoolupMessage(){
       return this.userLookUpMessage.getText();
    }
}
export default new LoginInfoPage()