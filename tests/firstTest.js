//This Mocha Hook where in browser.url method is called and it will execute before every "it" block 
// import allureReporter from '@wdio/allure-reporter';
beforeEach(function(){
   browser.url('/');
})

describe("Verify whether Login works correctly", function() {
	this.beforeEach(function(){
     console.log('Inside the describe block First Test!!');
  })
  it("check that user able to Login the Online Banking", function(done) {
    // allureReporter.addFeature('Login Page');
    browser.pause(5000)
    browser.maximizeWindow()
    
    expect(browser).toHaveUrl('https://parabank.parasoft.com/parabank/index.htm')
    var title = browser.getTitle()
    console.log("Title is : ", title)


    var usernameField = $("//input[@name='username']")
    usernameField.setValue('automtionqa')
    var passwordField = $("//input[@name='password']")
    passwordField.setValue('automationqatest')

    var submitButton = $("//input[@class='button']")
    submitButton.click()

    
  })

  
});
