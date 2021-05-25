import LoginPage from '../pageobjects/LoginPage';

//This Mocha Hook where in browser.url method is called and it will execute before every "it" block 
// import allureReporter from '@wdio/allure-reporter';
describe("Verify whether Login works correctly", () => {
it("check that user able to Login the Online Banking", () => {
    // allureReporter.addFeature('Login Page');
    LoginPage.open()
    browser.pause(5000)
    browser.maximizeWindow()
    
    expect(browser).toHaveUrl('https://parabank.parasoft.com/parabank/index.htm')
    var title = browser.getTitle()
    console.log("Title is : ", title)
    
    LoginPage.loginApplication('automationqa','automationqatest')
    browser.pause(10000)

  })
  
});
